import React, { useState } from "react";

const maxcount = 7; 

function DragDrop() {
    const [uploadedFiles, setUploadedFiles] = useState([]);
    const [fileLimit, setFileLimit]= useState(false);

    const handleFileEvent =  (e) => {
        const chosenFiles = Array.prototype.slice.call(e.target.files);
        handleUploadFiles(chosenFiles);
}

const handleUploadFiles = files => {
    const uploaded = [...uploadedFiles];
    let limitExceeded = false; 
        files.some((file) => {
            if (uploaded.findIndex((f) => f.name === file.name ) === -1) {
                if (file.size < 10000000){
                    alert("One of your files is too big to be uploaded. Please use smaller files!")
                    return true; 
                }
                uploaded.push(file);
                if (uploaded.length === maxcount) setFileLimit(true);
                if (uploaded.length > maxcount) {
                    alert("you can only add a limit of 7 files");
                    setFileLimit(false);
                    limitExceeded = true; 
                    return true; 
                }
            } else 
            {
                alert("You uploaded two files with the same name. Please check to make sure you have the right files selected or change the name of one file if they have the same name.") 
                return true; 
            }
        })
    if(!limitExceeded) setUploadedFiles(uploaded);
 };

  return (
    <div>
        <h1>Upload the files here:</h1>
        <input id='fileUpload' 
        type='file' 
        multiple
        display='none'
        accept='application/pdf, application/doc, application/  docx, application/rtf, application/txt, application/odt, application/ppt, application/ppx, application/ods, application/pptx, application/xls, application/xlsx'
        onChange={handleFileEvent}
        disabled={7}
       />
       <label htmlFor='fileUpload'>
            <a className={'btn btn-primary'}> Upload Files </a>
        </label>
        <div className="uploaded-files-list">
            {uploadedFiles.map(file => (
                <div>
                    <a>
                    {file.name}
                    </a>
                </div>
             ))} 
         </div>
</div>
  );
}

export default DragDrop;