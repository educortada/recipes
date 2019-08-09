import React from 'react'

const Acordion = ({ isOpen, handletToggle, searchHistory }) => {
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
              ? searchHistory.map(search => (
                <li className="acordion-content-item">
                  <span>{search}</span>
                  <button>
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
