import React from 'react';
import './style/AddWords.css';

const AddWords = ({ english, korean, onChange, onSave }) => {
    return (
        <div className="add-box">
            <input type="text" value={english} name="english" placeholder="영단어" onChange={onChange} className="input-box"/>
            <input type="text" value={korean} name="korean" placeholder="뜻" onChange={onChange} className="input-box"/>
            <button onClick={onSave} className="main-button">등록</button>
        </div>
    );
};

export default AddWords;