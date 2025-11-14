import React, { useState } from 'react';
import './Modal.css';

const Modal = () => {
  const [pages, setPages] = useState([
    { id: 1, name: 'Page 1', checked: false },
    { id: 2, name: 'Page 2', checked: true },
    { id: 3, name: 'Page 3', checked: false },
    { id: 4, name: 'Page 4', checked: false },
  ]);
  const [allPagesChecked, setAllPagesChecked] = useState(false);

  const handlePageCheck = (id) => {
    setPages(pages.map(page => 
      page.id === id ? { ...page, checked: !page.checked } : page
    ));
  };

  const handleAllPagesCheck = () => {
    setAllPagesChecked(!allPagesChecked);
  };

  return (
    <div className="modal-wrapper">
      <div className="modal-content">
        <div className="modal-header">
          <span className="all-pages-text">All pages</span>
          <input
            type="checkbox"
            checked={allPagesChecked}
            onChange={handleAllPagesCheck}
            className="modal-header-checkbox"
          />
        </div>
        
        <div className="separator"></div>
        
        <div className="modal-pages-list">
          {pages.map((page) => (
            <div key={page.id} className="modal-page-item">
              <span className="page-name">{page.name}</span>
              <input
                type="checkbox"
                checked={page.checked}
                onChange={() => handlePageCheck(page.id)}
                className="page-checkbox"
              />
            </div>
          ))}
        </div>

        <div className="separator"></div>

        <button className="modal-done-button">Done</button>
      </div>
    </div>
  );
};

export default Modal;

