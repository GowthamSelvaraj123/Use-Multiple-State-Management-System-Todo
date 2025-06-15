import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-blue-600 text-white py-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="text-left">
          <h1 className="text-2xl font-bold text-white">🌟 My Todo App</h1>
          <p className="text-sm text-blue-100">Organize your tasks efficiently</p>
        </div>
        <nav className="space-x-4">
          <Link to="/" className='text-white'>useContext Todo</Link>
          <Link to="/redux" className='text-white'>Redux Todo</Link>
        </nav>
      </div>
    </header>
  );
}
