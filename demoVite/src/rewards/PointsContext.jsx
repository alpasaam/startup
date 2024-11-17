import React, { createContext, useState, useContext } from 'react';
import { useAuth } from '../login/AuthContext'; // Adjust the import path as needed

// Create a context for points
const PointsContext = createContext();

// Create a provider component
export function PointsProvider({ children }) {
  const [points, setPoints] = useState(0);
  const { user } = useAuth(); // Get the user from AuthContext

  const addPoints = (amount) => {
    fetch('/api/reward-points', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: user.email, points: amount }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.points !== undefined) {
          setPoints((prevPoints) => prevPoints + amount);
        } else {
          throw new Error('Failed to add points');
        }
      })
      .catch((error) => {
        console.error('Error adding points:', error);
      });
  };

  return (
    <PointsContext.Provider value={{ points, addPoints }}>
      {children}
    </PointsContext.Provider>
  );
}

// Custom hook to use the PointsContext
export function usePoints() {
  return useContext(PointsContext);
}