import React from 'react';
import {FileMetaData, ImagePreview, RemoveFileIcon} from "./file-upload.styles";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

function PreviewContainer2({
    isImageFile,
    file,
    index,
    convertKiloToMB,
    convertBytesToKB,
    removeFile,
    fileName
                           }) {
    return (
        <div>
            {isImageFile && (
                <ImagePreview
                    src={URL.createObjectURL(file)}
                    alt={`file preview ${index}`}
                />
            )}
            <FileMetaData isImageFile={isImageFile}>
                <span>No.{index + 1}</span>
                <span>{file.name}</span>
                <aside>
                    {
                        convertBytesToKB(file.size) > 999
                            ?
                            <span>{convertKiloToMB(file.size)} Mb</span>
                            :
                            <span>{convertBytesToKB(file.size)} Kb</span>
                    }
                    <RemoveFileIcon
                        onClick={() => removeFile(fileName)}
                    >
                        <DeleteOutlineIcon/>
                    </RemoveFileIcon>
                </aside>
            </FileMetaData>
        </div>
    );
}

export default PreviewContainer2;