import React from 'react'
import uuidv1 from 'uuid/v1'

const Acordion = ({
  handleDeleteSearchHistory,
  handleSearch,
  handletToggle,
  isOpen,
  searchHistory
}) => {
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
                <li
                  key={uuidv1()}
                  className="acordion-item"
                >
                  <div
                    className="acordion-item-text"
                    onClick={() => handleSearch(item.inputSearch)}
                  >
                    {item.inputSearch}
                  </div>
                  <button onClick={() => handleDelete(item.uuid)}>
                    <i className="fas fa-times-circle"></i>
                  </button>
                </li>
              ))
              : <li className="acordion-item">No search yet!</li>
            }
          </ul>
        </div>
      )}
    </div>
  )
}

export default Acordion
