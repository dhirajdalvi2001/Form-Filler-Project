import { useEffect, useState, useContext, useRef } from 'react';
import { PDFReader } from 'react-read-pdf';
import { PDFDocument, StandardFonts, rgb, page, height, fontSize, scale } from 'pdf-lib';
import { PDFMenu, ChangePage, DownloadButton, Heading3 } from './styles/Forms';
import {BiFirstPage, BiLastPage} from "react-icons/bi";
import { ShouldPDFContext } from './Forms';
import { admissionForm } from './arrays/admissionForm';

function FormsPreview({formDataToSend}) {
  const [winScale, setWinScale] = useState(1)
  window.addEventListener('resize', () => {
    let windowsWidth = window.innerWidth
    if (windowsWidth > 1000) {
      setWinScale(1)
    }
    if (windowsWidth <= 700) {
      setWinScale(0.5)
    }
  });
  //states
  const [pageNum, setPageNum] = useState(1)
  const [pdfUri, setPdfUri] = useState("");
  const [file, setFile] = useState(new Blob());
  const [arrayBuf, setArrayBuf] = useState(new Uint8Array());
  const updatePDF = useContext(ShouldPDFContext);
  const [defaultPDF, setDefaultPDF] = useState(new Uint8Array());
  const isMountedRef = useRef(null);

  useEffect(() => {
    getPdf();
    }, []);
    const getPdf = async () => {
    let pdf = await fetch("http://127.0.0.1:8080/RegForm.pdf");
    let pdfbuffer = await pdf.arrayBuffer();
    let u8buffer = new Uint8Array(pdfbuffer);
    setArrayBuf(u8buffer);
    setDefaultPDF(u8buffer);
  };

  useEffect(() => {
    let blobbed = new Blob([arrayBuf], { type: "application/pdf" });
    if (isMountedRef.current) {
      setFile(blobbed);
    }
    return () => isMountedRef.current = false;
  }, [arrayBuf]);

  useEffect(() => {
    if (!!file) {
      let fileUri = URL.createObjectURL(file);
      setPdfUri(fileUri);
    }
  }, [file]);

  if (!!file) {
    // console.log(file);
  }

  
    //* PDFLIB
  const pdfUpdateFunction = async () => {
    const pdfDoc = await PDFDocument.load(defaultPDF);
    const timesRoman = await pdfDoc.embedFont(StandardFonts.TimesRoman);
    const pages = pdfDoc.getPages();  
    const firstPage = pages[0];
    const secondPage = pages[1];
    
    const fSize = 13;
    const fColor = rgb(0, 0, 0, 1);

    // Student's Info
    if (!!formDataToSend.studentName) {
      firstPage.drawText(formDataToSend.studentName + " " + formDataToSend.studentlastName, {
        x: 150,
        y: 488,
        size: fSize,
        font: timesRoman,
        color: fColor,
      });
    }

    if (!!formDataToSend.studentName) {
      secondPage.drawText(formDataToSend.studentName + " " + formDataToSend.studentlastName, {
        x: 54,
        y: 396.5,
        size: fSize,
        font: timesRoman,
        color: fColor,
      });
    }

    if (!!formDataToSend.studentName) {
      secondPage.drawText(formDataToSend.studentName + " " + formDataToSend.studentlastName, {
        x: 314,
        y: 138.5,
        size: fSize,
        font: timesRoman,
        color: fColor,
      });
    }

    if (!!formDataToSend.studentName) {
      secondPage.drawText(formDataToSend.studentName + " " + formDataToSend.studentlastName, {
        x: 300,
        y: 59.5,
        size: fSize,
        font: timesRoman,
        color: fColor,
      });
    }
    
    if (!!formDataToSend.studentNumber) {
      firstPage.drawText(formDataToSend.studentNumber, {
        x: 456,
        y: 489,
        size: fSize,
        font: timesRoman,
        color: fColor,
      });
    }

    if (!!formDataToSend.studentNumber) {
      secondPage.drawText(formDataToSend.studentNumber, {
        x: 306,
        y: 15.5,
        size: fSize,
        font: timesRoman,
        color: fColor,
      });
    }
    
    // Father's Info
    if (!!formDataToSend.fathersName) {
      firstPage.drawText(formDataToSend.fathersName  + " " + formDataToSend.studentlastName, {
        x: 156,
        y: 467,
        size: fSize,
        font: timesRoman,
        color: fColor,
      });
    }

    if (!!formDataToSend.fathersName) {
      secondPage.drawText(formDataToSend.fathersName  + " " + formDataToSend.studentlastName, {
        x: 318,
        y: 397.5,
        size: fSize,
        font: timesRoman,
        color: fColor,
      });
    }

    if (!!formDataToSend.fathersName) {
      secondPage.drawText(formDataToSend.fathersName  + " " + formDataToSend.studentlastName, {
        x: 54,
        y: 138,
        size: fSize,
        font: timesRoman,
        color: fColor,
      });
    }
      
    if (!!formDataToSend.fathersOccupation) {
      firstPage.drawText(formDataToSend.fathersOccupation, {
        x: 372,
        y: 468,
        size: fSize,
        font: timesRoman,
        color: fColor,
      });
    }

    if (!!formDataToSend.fathersNumber) {
      firstPage.drawText(formDataToSend.fathersNumber, {
        x: 470,
        y: 469,
        size: fSize,
        font: timesRoman,
        color: fColor,
      });
    }

    if (!!formDataToSend.fathersWorkAdd) {
      firstPage.drawText(formDataToSend.fathersWorkAdd, {
        x: 156,
        y: 447,
        size: fSize,
        font: timesRoman,
        color: fColor,
      });
    }

    if (!!formDataToSend.fathersEmail) {
      firstPage.drawText(formDataToSend.fathersEmail, {
        x: 419,
        y: 448,
        size: fSize,
        font: timesRoman,
        color: fColor,
      });
    }

    // Mother's Info
    if (!!formDataToSend.mothersName) {
      firstPage.drawText(formDataToSend.mothersName, {
        x: 113,
        y: 426,
        size: fSize,
        font: timesRoman,
        color: fColor,
      });
    }
    
    if (!!formDataToSend.mothersOccupation) {
      firstPage.drawText(formDataToSend.mothersOccupation, {
        x: 372,
        y: 426.5,
        size: fSize,
        font: timesRoman,
        color: fColor,
      });
    }

    if (!!formDataToSend.mothersNumber) {
      firstPage.drawText(formDataToSend.mothersNumber, {
        x: 470,
        y: 427,
        size: fSize,
        font: timesRoman,
        color: fColor,
      });
    }

    if (!!formDataToSend.studentDOB) {
      firstPage.drawText(formDataToSend.studentDOB, {
        x: 102,
        y: 405,
        size: fSize,
        font: timesRoman,
        color: fColor,
      });
    }

    // Student's Info Continue
    if (!!formDataToSend.studentPOB) {
      firstPage.drawText(formDataToSend.studentPOB, {
        x: 380,
        y: 406,
        size: fSize,
        font: timesRoman,
        color: fColor,
      });
    }

    if (!!formDataToSend.studentPermanentAdd) {
      firstPage.drawText(formDataToSend.studentPermanentAdd, {
        x: 130,
        y: 384,
        size: fSize,
        font: timesRoman,
        color: fColor,
      });
    }

    if (!!formDataToSend.studentPermanentAdd) {
      secondPage.drawText(formDataToSend.studentPermanentAdd, {
        x: 291,
        y: 37.5,
        size: fSize,
        font: timesRoman,
        color: fColor,
      });
    }
    
    // Local Guradian's Info
    if (!!formDataToSend.localGuardiansName) {
      firstPage.drawText(formDataToSend.localGuardiansName, {
        x: 148,
        y: 341.5,
        size: fSize,
        font: timesRoman,
        color: fColor,
      });
    }
      
    if (!!formDataToSend.localGuardiansOccupation) {
      firstPage.drawText(formDataToSend.localGuardiansOccupation, {
        x: 372,
        y: 342.5,
        size: fSize,
        font: timesRoman,
        color: fColor,
      });
    }

    if (!!formDataToSend.localGuardiansNumber) {
      firstPage.drawText(formDataToSend.localGuardiansNumber, {
        x: 470,
        y: 343,
        size: fSize,
        font: timesRoman,
        color: fColor,
      });
    }

    if (!!formDataToSend.localGuardiansWorkAdd) {
      firstPage.drawText(formDataToSend.localGuardiansWorkAdd, {
        x: 156,
        y: 320.5,
        size: fSize,
        font: timesRoman,
        color: fColor,
      });
    }

    if (!!formDataToSend.localGuardiansEmail) {
      firstPage.drawText(formDataToSend.localGuardiansEmail, {
        x: 419,
        y: 321.5,
        size: fSize,
        font: timesRoman,
        color: fColor,
      });
    }

    if (!!formDataToSend.localGuardiansAdd) {
      firstPage.drawText(formDataToSend.localGuardiansAdd, {
        x: 109,
        y: 299,
        size: fSize,
        font: timesRoman,
        color: fColor,
      });
    }

    // Academic Record

    // Secondary Info
    if (!!formDataToSend.secondaryYear) {
      firstPage.drawText(formDataToSend.secondaryYear, {
        x: 148,
        y: 143,
        size: fSize,
        font: timesRoman,
        color: fColor,
      });
    }

    if (!!formDataToSend.secondaryYear) {
      firstPage.drawText(formDataToSend.secondaryCollegeNameAndPlace, {
        x: 188,
        y: 143,
        size: fSize,
        font: timesRoman,
        color: fColor,
      });
    }

    if (!!formDataToSend.secondaryUniversityOrBoard) {
      firstPage.drawText(formDataToSend.secondaryUniversityOrBoard, {
        x: 388,
        y: 145,
        size: fSize,
        font: timesRoman,
        color: fColor,
      });
    }

    if (!!formDataToSend.secondaryDivisionAndPercentage) {
      firstPage.drawText(formDataToSend.secondaryDivisionAndPercentage, {
        x: 485,
        y: 146,
        size: fSize,
        font: timesRoman,
        color: fColor,
      });
    }

    // Senior Secondary Info
    if (!!formDataToSend.seniorSecondaryYear) {
      firstPage.drawText(formDataToSend.seniorSecondaryYear, {
        x: 148,
        y: 124,
        size: fSize,
        font: timesRoman,
        color: fColor,
      });
    }

    if (!!formDataToSend.seniorSecondaryCollegeNameAndPlace) {
      firstPage.drawText(formDataToSend.seniorSecondaryCollegeNameAndPlace, {
        x: 188,
        y: 124,
        size: fSize,
        font: timesRoman,
        color: fColor,
      });
    }

    if (!!formDataToSend.seniorSecondaryUniversityOrBoard) {
      firstPage.drawText(formDataToSend.seniorSecondaryUniversityOrBoard, {
        x: 388,
        y: 126,
        size: fSize,
        font: timesRoman,
        color: fColor,
      });
    }

    if (!!formDataToSend.seniorSecondaryDivisionAndPercentage) {
      firstPage.drawText(formDataToSend.seniorSecondaryDivisionAndPercentage, {
        x: 485,
        y: 127,
        size: fSize,
        font: timesRoman,
        color: fColor,
      });
    }
      
    // Diploma Info
    if (!!formDataToSend.diplomaYear) {
      firstPage.drawText(formDataToSend.diplomaYear, {
        x: 148,
        y: 106.5,
        size: fSize,
        font: timesRoman,
        color: fColor,
      });
    }

    if (!!formDataToSend.diplomaCollegeNameAndPlace) {
      firstPage.drawText(formDataToSend.diplomaCollegeNameAndPlace, {
        x: 188,
        y: 107,
        size: fSize,
        font: timesRoman,
        color: fColor,
      });
    }

    if (!!formDataToSend.diplomaUniversityOrBoard) {
      firstPage.drawText(formDataToSend.diplomaUniversityOrBoard, {
        x: 388,
        y: 108,
        size: fSize,
        font: timesRoman,
        color: fColor,
      });
    }

    if (!!formDataToSend.diplomaDivisionAndPercentage) {
      firstPage.drawText(formDataToSend.diplomaDivisionAndPercentage, {
        x: 485,
        y: 109,
        size: fSize,
        font: timesRoman,
        color: fColor,
      });
    }
    
    // Graduation Info
    if (!!formDataToSend.graduationYear) {
      firstPage.drawText(formDataToSend.graduationYear, {
        x: 148,
        y: 86,
        size: fSize,
        font: timesRoman,
        color: fColor,
      });
    }

    if (!!formDataToSend.graduationCollegeNameAndPlace) {
      firstPage.drawText(formDataToSend.graduationCollegeNameAndPlace, {
        x: 188,
        y: 86,
        size: fSize,
        font: timesRoman,
        color: fColor,
      });
    }

    if (!!formDataToSend.graduationUniversityOrBoard) {
      firstPage.drawText(formDataToSend.graduationUniversityOrBoard, {
        x: 388,
        y: 88,
        size: fSize,
        font: timesRoman,
        color: fColor,
      });
    }

    if (!!formDataToSend.graduationDivisionAndPercentage) {
      firstPage.drawText(formDataToSend.graduationDivisionAndPercentage, {
        x: 485,
        y: 89,
        size: fSize,
        font: timesRoman,
        color: fColor,
      });
    }

    const pdfBytes = await pdfDoc.save();

    // setArrayBuf(pdfBytes);
    return pdfBytes;
  };
  if (updatePDF.PDFUpdate) {
    isMountedRef.current = true;
    (async () => {
      let buf = await pdfUpdateFunction();
      // setArrayBuf(defaultPDF);
      if (isMountedRef.current) {
        setArrayBuf([]);
        setArrayBuf(buf);
      }
      updatePDF.setPDFUpdate(false);
    }
    ) ()
  }
  function downloadBlob(blob, name = 'file.txt') {
    if (
      window.navigator && 
      window.navigator.msSaveOrOpenBlob
    ) return window.navigator.msSaveOrOpenBlob(blob);

    // For other browsers:
    // Create a link pointing to the ObjectURL containing the blob.
    const data = window.URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = data;
    link.download = name;

    // this is necessary as link.click() does not work on the latest firefox
    link.dispatchEvent(
      new MouseEvent('click', { 
        bubbles: true, 
        cancelable: true, 
        view: window 
      })
    );

    setTimeout(() => {
      // For Firefox it is necessary to delay revoking the ObjectURL
      window.URL.revokeObjectURL(data);
      link.remove();
    }, 100);
}
  return (
    <>
      {arrayBuf?.length !== 0 ? (
        <>
        {/* <button
          onClick={async () => {
            let buf = await pdfUpdateFunction();
            // setArrayBuf(defaultPDF);
            setArrayBuf(buf);
            // await setArrayBuf(await pdfUpdateFunction(arrayBuf));
          }}>
          {" "}
          click to update
        </button> */}
          <PDFMenu>
            <ChangePage>
              <BiFirstPage onClick={() => { setPageNum(1) }} />
            </ChangePage>
            <ChangePage>
              <BiLastPage onClick={() => { setPageNum(2) }} />
            </ChangePage>
          </PDFMenu>
          
          {winScale === 1 && <PDFReader data={arrayBuf} page={pageNum} scale={1} /> }
          {winScale === 0.5 && <PDFReader data={arrayBuf} page={pageNum} scale={0.5} /> }
          
          <PDFMenu className="bottom">
            <ChangePage>
              <BiFirstPage onClick={() => { setPageNum(1) }} />
            </ChangePage>
            <ChangePage>
              <BiLastPage onClick={() => { setPageNum(2) }} />
            </ChangePage>
          </PDFMenu>
          <DownloadButton onClick={async() => {
              let blobbed = new Blob([arrayBuf], { type: "application/pdf" });
              let fileUri = URL.createObjectURL(file);
              downloadBlob(blobbed, 'Admission-Form(FormFiller).pdf');
            }}>
              Download Here
            {/* <a href={pdfUri}></a> */}
          </DownloadButton>
        </>
      ) : (
        <Heading3>Loading...</Heading3>
      )}
    </>
  );
}

export default FormsPreview;