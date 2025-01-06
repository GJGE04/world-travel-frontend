import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDestinations, createDestination, deleteDestination, updateDestination } from '../redux/actions';
import '../styles/TravelDestinations.css';

const TravelDestinations = () => {
  const dispatch = useDispatch();
  const destinations = useSelector((state) => state.destinations);
  const [newDestination, setNewDestination] = useState({ name: '', country: '', description: '' });

  // Cargar los destinos desde el backend cuando se monta el componente
  useEffect(() => {
    dispatch(fetchDestinations());
  }, [dispatch]);

  // Función para agregar un nuevo destino
  const handleCreate = () => {
    if (newDestination.name && newDestination.country && newDestination.description) {
      dispatch(createDestination(newDestination.name, newDestination.country, newDestination.description))
        .then(() => {
          // Después de crear el destino, volvemos a cargar los destinos
          dispatch(fetchDestinations());
        })
        .catch(err => {
          console.error('Error creating destination:', err);
        });

      // Limpiar el formulario
      setNewDestination({ name: '', country: '', description: '' });
    } else {
      alert('All fields are required');
    }
  };

  // Función para eliminar un destino
  const handleDelete = (id) => {
	  const isConfirmed = window.confirm('Are you sure you want to delete this destination?');
	  if (isConfirmed) {
		dispatch(deleteDestination(id))
		  .then(() => {
			dispatch(fetchDestinations()); // Refrescar la lista después de eliminar
		  })
		  .catch(err => {
			console.error('Error deleting destination:', err);
		  });
	  }
  };

  // Función para actualizar un destino
  const handleUpdate = (id) => {
    const name = prompt('Enter new destination name');
    const country = prompt('Enter new country');
    const description = prompt('Enter new description');
    dispatch(updateDestination(id, name, country, description))
      .then(() => {
        dispatch(fetchDestinations()); // Refrescar la lista después de la actualización
      })
      .catch(err => {
        console.error('Error updating destination:', err);
      });
  };

  return (
    <div className="destinations-container">
      <h1>Travel Destinations</h1>

      {/* Formulario para añadir nuevos destinos */}
      <div className="destination-form">
        <input
          type="text"
          placeholder="Name"
          value={newDestination.name}
          onChange={(e) => setNewDestination({ ...newDestination, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Country"
          value={newDestination.country}
          onChange={(e) => setNewDestination({ ...newDestination, country: e.target.value })}
        />
        <textarea
          placeholder="Description"
          value={newDestination.description}
          onChange={(e) => setNewDestination({ ...newDestination, description: e.target.value })}
        ></textarea>
        <button className="add-button" onClick={handleCreate}>Add Destination</button>
      </div>

      {/* Lista de destinos */}
      <ul className="destination-list">
        {destinations.length > 0 ? (
          destinations.map((destination) => (
            <li key={destination.id} className="destination-item">
              <h3>{destination.name}</h3>
              <p><strong>Country:</strong> {destination.country}</p>
              <p><strong>Description:</strong> {destination.description}</p>
              <button className="edit-button" onClick={() => handleUpdate(destination.id)}>Edit</button>
              <button className="delete-button" onClick={() => handleDelete(destination.id)}>Delete</button>
            </li>
          ))
        ) : (
          <p>No destinations available. Add a new destination!</p>
        )}
      </ul>
    </div>
  );
};

export default TravelDestinations;
