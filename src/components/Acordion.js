import React from 'react'
import uuidv1 from 'uuid/v1'

const Acordion = ({ isOpen, handletToggle, searchHistory, handleDeleteSearchHistory }) => {
  // Remove clicked item from the search list.
  const handleDelete = (currentItemUuid) => {
    const result = searchHistory.filter(item => {
      return item.uuid !== currentItemUuid
    })
    handleDeleteSearchHistory(result)
  }

  return (
    <div className="acordion">
      <div
        onClick={handletToggle}
        className="acordion-header"
      >
        <span>Last searches</span>
        {isOpen
          ? <i className="fas fa-chevron-up"></i>
          : <i className="fas fa-chevron-down"></i>}
      </div>
      {isOpen && (
        <div className="acordion-content">
          <ul>
            {searchHistory.length
              ? searchHistory.map(item => (
                <li key={uuidv1()} className="acordion-content-item">
                  <span>{item.inputSearch}</span>
                  <button onClick={() => handleDelete(item.uuid)}>
                    <i className="fas fa-times-circle"></i>
                  </button>
                </li>
              ))
              : <li>No search yet!</li>
            }
          </ul>
        </div>
      )}
    </div>
  )
}

export default Acordion
