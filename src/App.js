
// iRap Glow-Up v2 - Modern UI with Visual Enhancements
import { useState } from 'react';
import { Mic, User, Video, Music, Users, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './index.css';

const screens = {
  home: 'Home',
  profile: 'Profile',
  studio: 'Studio',
  live: 'Go Live',
  battle: 'Join Battle'
};

export default function App() {
  const [screen, setScreen] = useState('home');

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-gray-900 text-white flex flex-col">
      <div className="flex-1 flex items-center justify-center p-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={screen}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
            className="w-full max-w-md text-center space-y-6"
          >
            <h1 className="text-4xl font-extrabold tracking-tight mb-2 drop-shadow-xl">{screens[screen]}</h1>
            {screen === 'home' && (
              <div className="space-y-4">
                <motion.button whileHover={{ scale: 1.05 }} className="btn-glow" onClick={() => setScreen('live')}><Video className="inline w-5 h-5 mr-2" />Go Live</motion.button>
                <motion.button whileHover={{ scale: 1.05 }} className="btn-glow" onClick={() => setScreen('battle')}><Zap className="inline w-5 h-5 mr-2" />Join Battle</motion.button>
                <motion.button whileHover={{ scale: 1.05 }} className="btn-glow" onClick={() => setScreen('studio')}><Music className="inline w-5 h-5 mr-2" />Record</motion.button>
              </div>
            )}
            {screen === 'profile' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                <img src="https://via.placeholder.com/100" alt="avatar" className="mx-auto rounded-full border border-white" />
                <p className="text-xl font-semibold">@irapuser</p>
                <p>Followers: 2.3K | Following: 180</p>
                <div className="bg-zinc-800 p-3 rounded-xl">
                  <h3 className="text-lg mb-2 font-bold">🎵 Featured Tracks</h3>
                  <p>• Dream Flow</p>
                  <p>• BeatStorm</p>
                </div>
              </motion.div>
            )}
            {screen === 'studio' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                <p className="text-xl">🎚️ Track Timeline</p>
                <div className="grid grid-cols-2 gap-4">
                  <button className="btn-glow">Loop Library</button>
                  <button className="btn-glow">Virtual Instruments</button>
                </div>
                <motion.button whileTap={{ scale: 0.95 }} className="btn-glow">Start Recording</motion.button>
              </motion.div>
            )}
            {screen === 'live' && (
              <p className="text-lg">🎥 Setting up your stream…</p>
            )}
            {screen === 'battle' && (
              <p className="text-lg">🔥 Loading rap battle arena…</p>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
      <nav className="bg-zinc-800 p-4 flex justify-around border-t border-zinc-700 rounded-t-3xl">
        <button onClick={() => setScreen('home')}><Video className="w-5 h-5 mx-auto" /><div className="text-xs mt-1">Home</div></button>
        <button onClick={() => setScreen('studio')}><Music className="w-5 h-5 mx-auto" /><div className="text-xs mt-1">Create</div></button>
        <button onClick={() => setScreen('profile')}><User className="w-5 h-5 mx-auto" /><div className="text-xs mt-1">Profile</div></button>
      </nav>
    </div>
  );
}
