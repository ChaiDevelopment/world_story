import { useCallback, useState } from 'react';
import MapView from './components/MapView';
import Timeline from './components/Timeline';
import DetailPanel from './components/DetailPanel';
import type { ViewState } from './types';

export default function App() {
  const [view, setView] = useState<ViewState>({
    year: 1350,
    selectedCivId: null,
    layers: { territories: true, trade: true, events: true, people: false },
  });
  const [eventId, setEventId] = useState<string | null>(null);
  const [focus, setFocus] = useState<{ name: string; lon: number; lat: number } | null>(null);

  const setYear = useCallback((y: number) => setView((v) => ({ ...v, year: y })), []);
  const selectCiv = useCallback((id: string | null) => {
    setEventId(null);
    setFocus(null);
    setView((v) => ({ ...v, selectedCivId: id }));
  }, []);
  const focusPlace = useCallback((place: { name: string; lon: number; lat: number }, y?: number) => {
    setFocus({ name: place.name, lon: place.lon, lat: place.lat });
    if (y !== undefined) setView((v) => ({ ...v, year: y }));
  }, []);

  const toggle = (k: keyof ViewState['layers']) =>
    setView((v) => ({ ...v, layers: { ...v.layers, [k]: !v.layers[k] } }));

  const layerLabels: [keyof ViewState['layers'], string][] = [
    ['territories', 'Wilayah'],
    ['trade', 'Jalur dagang'],
    ['events', 'Peristiwa'],
    ['people', 'Tokoh'],
  ];

  return (
    <div className="app">
      <header className="topbar">
        <h1>
          <span className="mark">◆</span> Atlas Sejarah Dunia
        </h1>
        <div className="layers">
          {layerLabels.map(([k, label]) => (
            <label key={k} className={view.layers[k] ? 'on' : ''}>
              <input type="checkbox" checked={view.layers[k]} onChange={() => toggle(k)} />
              {label}
            </label>
          ))}
        </div>
      </header>
      <main className="main">
        <MapView
          view={view}
          focus={focus}
          onClearFocus={() => setFocus(null)}
          onSelectCiv={selectCiv}
          onSelectEvent={(id) => {
            setEventId(id);
            setFocus(null);
            setView((v) => ({ ...v, selectedCivId: null }));
          }}
        />
        <DetailPanel
          year={view.year}
          civId={view.selectedCivId}
          eventId={eventId}
          onSelectCiv={selectCiv}
          onApplyYear={setYear}
          onFocusPlace={focusPlace}
        />
      </main>
      <Timeline year={view.year} onChange={setYear} />
    </div>
  );
}
