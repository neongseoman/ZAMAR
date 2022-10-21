// import React from 'react';
// import {FileMetaData, ImagePreview, PreviewContainer, PreviewList, RemoveFileIcon} from "./file-upload.styles";
// import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
//
// const KILO_BYTES_PER_BYTE = 1000;
// const MEGA_BYTES_PER_KILO_BYTE = 1000000;
//
// const convertNestedObjectToArray = (nestedObj) =>
//     Object.keys(nestedObj).map((key) => nestedObj[key]);
//
//
// function FilePreviewContainer2(
//     files = files,
//     setFiles=setFiles,
//     updateFilesCb
// ) {
//
//     //kilobyte
//     const convertBytesToKB = (bytes) => Math.round(bytes / KILO_BYTES_PER_BYTE);
//     //megabyte
//     const convertKiloToMB = (bytes) => Math.round(bytes / MEGA_BYTES_PER_KILO_BYTE);
//
//     const callUpdateFilesCb = (files) => {
//         const filesAsArray = convertNestedObjectToArray(files);
//         updateFilesCb(filesAsArray);
//     };
//
//     const removeFile = (fileName) => {
//         delete files[fileName];
//         setFiles({...files});
//         callUpdateFilesCb({...files});
//     };
//
//
//     return (
//         <div>
//             <span style={{
//                 marginLeft: "13px",
//                 fontWeight: "bold"
//             }}>
//                     Uploaded Image
//                 </span>
//             <PreviewList>
//                 {Object.keys(files).map((fileName, index) => {
//                     console.log(fileName)
//                     console.log(files)
//                     let file = files[fileName];
//                     let isImageFile = file.type.split("/")[0] === "image";
//                     return (
//                         <PreviewContainer key={fileName}>
//                             <div>
//                                 {isImageFile && (
//                                     <ImagePreview
//                                         src={URL.createObjectURL(file)}
//                                         alt={`file preview ${index}`}
//                                     />
//                                 )}
//                                 <FileMetaData isImageFile={isImageFile}>
//                                     <span>No.{index + 1}</span>
//                                     <span>{file.name}</span>
//                                     <aside>
//                                         {
//                                             convertBytesToKB(file.size) > 999
//                                                 ?
//                                                 <span>{convertKiloToMB(file.size)} Mb</span>
//                                                 :
//                                                 <span>{convertBytesToKB(file.size)} Kb</span>
//                                         }
//                                         <RemoveFileIcon
//                                             onClick={() => removeFile(fileName)}
//                                         >
//                                             <DeleteOutlineIcon/>
//                                         </RemoveFileIcon>
//                                     </aside>
//                                 </FileMetaData>
//                             </div>
//                         </PreviewContainer>
//                     );
//                 })}
//             </PreviewList>
//         </div>
//     );
// }
//
// export default FilePreviewContainer2;