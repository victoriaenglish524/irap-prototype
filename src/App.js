import { useState } from 'react';
import './index.css';

export default function App() {
  const [screen, setScreen] = useState('home');

  const renderScreen = () => {
    switch (screen) {
      case 'home':
        return (
          <div className="p-6">
            <h1 className="text-xl font-bold mb-4">Home Screen</h1>
            <div className="grid grid-cols-1 gap-4">
              <button className="btn" onClick={() => alert('Go Live')}>Go Live</button>
              <button className="btn" onClick={() => alert('Join Battle')}>Join Battle</button>
              <button className="btn" onClick={() => setScreen('studio')}>Record</button>
            </div>
          </div>
        );
      case 'profile':
        return (
          <div className="p-6">
            <h1 className="text-xl font-bold mb-4">Profile Screen</h1>
            <p><strong>Username:</strong> @irapuser</p>
            <p><strong>Followers:</strong> 2.3K</p>
            <p><strong>Following:</strong> 180</p>
            <p className="mt-2">Music is my life. Follow me for fresh beats!</p>
            <button className="btn mt-4">Monetize</button>
            <h2 className="text-lg mt-6">Featured Tracks</h2>
            <ul className="list-disc list-inside">
              <li>Track 1 - Dream Flow</li>
              <li>Track 2 - BeatStorm</li>
            </ul>
          </div>
        );
      case 'studio':
        return (
          <div className="p-6">
            <h1 className="text-xl font-bold mb-4">Studio Screen</h1>
            <p className="mb-4">Track Timeline (placeholder)</p>
            <div className="grid grid-cols-2 gap-4">
              <button className="btn">Loop Library</button>
              <button className="btn">Virtual Instruments</button>
            </div>
            <button className="btn mt-6">Record</button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="h-screen flex flex-col justify-between">
      <div className="flex-1 overflow-auto">{renderScreen()}</div>
      <nav className="bg-gray-200 p-4 flex justify-around border-t">
        <button onClick={() => setScreen('home')}>Home</button>
        <button onClick={() => alert('Discover')}>Discover</button>
        <button onClick={() => setScreen('studio')}>Create</button>
        <button onClick={() => alert('Groups')}>Groups</button>
        <button onClick={() => setScreen('profile')}>Profile</button>
      </nav>
    </div>
  );
}
