import React, {useRef, useState} from "react";
import {
    FileUploadContainer,
    FormField,
    DragDropText,
    UploadFileBtn,
    FilePreviewContainer,
    ImagePreview,
    PreviewContainer,
    PreviewList,
    FileMetaData,
    RemoveFileIcon,
    InputLabel,
    Container,
} from "./file-upload.styles";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';


const KILO_BYTES_PER_BYTE = 1000;
const MEGA_BYTES_PER_KILO_BYTE = 1000000;
const DEFAULT_MAX_FILE_SIZE_IN_BYTES = 10000000;    //MAX 10MB

const convertNestedObjectToArray = (nestedObj) =>
    Object.keys(nestedObj).map((key) => nestedObj[key]);

//kilobyte
const convertBytesToKB = (bytes) => Math.round(bytes / KILO_BYTES_PER_BYTE);
//megabyte
const convertKiloToMB = (bytes) => Math.round(bytes / MEGA_BYTES_PER_KILO_BYTE);

const FileUpload = ({
                        label,
                        updateFilesCb,
                        maxFileSizeInBytes = DEFAULT_MAX_FILE_SIZE_IN_BYTES,
                        ...otherProps
                    }) => {
    const fileInputField = useRef(null);
    const [files, setFiles] = useState({});

    const handleUploadBtnClick = () => {
        fileInputField.current.click();
    };

    const addNewFiles = (newFiles) => {
        for (let file of newFiles) {
            if (file.size <= maxFileSizeInBytes) {
                if (!otherProps.multiple) {
                    return {file};
                }
                files[file.name] = file;
            }
        }
        return {...files};
    };

    const callUpdateFilesCb = (files) => {
        const filesAsArray = convertNestedObjectToArray(files);
        updateFilesCb(filesAsArray);
    };

    const handleNewFileUpload = (e) => {
        const {files: newFiles} = e.target;
        if (newFiles.length) {
            let updatedFiles = addNewFiles(newFiles);
            setFiles(updatedFiles);
            callUpdateFilesCb(updatedFiles);
        }
    };

    const removeFile = (fileName) => {
        delete files[fileName];
        setFiles({...files});
        callUpdateFilesCb({...files});
    };

    return (
        <Container>
            <FileUploadContainer>
                <DragDropText>Drag and drop your files anywhere or</DragDropText>
                <UploadFileBtn type="button" onClick={handleUploadBtnClick}>
                    <span> Upload {otherProps.multiple ? "files" : "a file"}</span>
                </UploadFileBtn>
                <FormField
                    type="file"
                    ref={fileInputField}
                    onChange={handleNewFileUpload}
                    title=""
                    value=""
                    {...otherProps}
                />
            </FileUploadContainer>


            <FilePreviewContainer>
                <span style={{
                    marginLeft: "13px",
                    fontWeight: "bold"
                }}>
                    Uploaded Image
                </span>
                <PreviewList>
                    {Object.keys(files).map((fileName, index) => {
                        console.log(fileName)
                        console.log(files)
                        let file = files[fileName];
                        let isImageFile = file.type.split("/")[0] === "image";
                        return (
                            <PreviewContainer key={fileName}>
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
                                                convertBytesToKB(file.size)>999
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
                            </PreviewContainer>
                        );
                    })}
                </PreviewList>
            </FilePreviewContainer>
        </Container>
    );
};

export default FileUpload;