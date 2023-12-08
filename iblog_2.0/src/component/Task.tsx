import React, { ChangeEvent, useState } from 'react';

const Task = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files != null) {
      setSelectedFile(e.target.files[0]);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <p>Selected File: {selectedFile?.name}</p>
      <p>Saved file: {selectedFile?.type}</p>
    </div>
  );
};

export default Task;
