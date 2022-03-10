import { useEffect, useState, useContext, useRef } from 'react';
import { PDFReader } from 'react-read-pdf';
import { PDFDocument, StandardFonts, rgb, page, height, fontSize } from 'pdf-lib';
import { ChangePage } from './styles/Forms';
import {BiFirstPage, BiLastPage} from "react-icons/bi";
import { ShouldPDFContext } from './Forms';

function FormsPreview({formDataToSend}) {
  let scaleVal = 1.2;
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
    
    if (!!formDataToSend.studentNumber) {
      firstPage.drawText(formDataToSend.studentNumber, {
        x: 456,
        y: 489,
        size: fSize,
        font: timesRoman,
        color: fColor,
      });
    }
    
    // Father's Info
    if (!!formDataToSend.studentMiddleName) {
      firstPage.drawText(formDataToSend.studentMiddleName, {
        x: 156,
        y: 467,
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

    if (!!formDataToSend.fathersNumber) {
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
        x: 406,
        y: 145,
        size: fSize,
        font: timesRoman,
        color: fColor,
      });
    }

    if (!!formDataToSend.secondaryDivisionAndPercentage) {
      firstPage.drawText(formDataToSend.secondaryDivisionAndPercentage, {
        x: 503,
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
        x: 406,
        y: 126,
        size: fSize,
        font: timesRoman,
        color: fColor,
      });
    }

    if (!!formDataToSend.seniorSecondaryDivisionAndPercentage) {
      firstPage.drawText(formDataToSend.seniorSecondaryDivisionAndPercentage, {
        x: 503,
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
        x: 406,
        y: 108,
        size: fSize,
        font: timesRoman,
        color: fColor,
      });
    }

    if (!!formDataToSend.diplomaDivisionAndPercentage) {
      firstPage.drawText(formDataToSend.diplomaDivisionAndPercentage, {
        x: 503,
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
        x: 406,
        y: 88,
        size: fSize,
        font: timesRoman,
        color: fColor,
      });
    }

    if (!!formDataToSend.graduationDivisionAndPercentage) {
      firstPage.drawText(formDataToSend.graduationDivisionAndPercentage, {
        x: 503,
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
  return (
    <>
      {arrayBuf?.length !== 0 ? (
        <div className="FormWrapper">
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
          <a href={pdfUri}>downlaod file</a>
          <BiFirstPage onClick={() => { setPageNum(1) }} />
          <BiLastPage onClick={() => { setPageNum(2) }} />
          <PDFReader data={arrayBuf} page={pageNum} scale={scaleVal} />
        </div>
      ) : (
        <h3>loading...</h3>
      )}
    </>
  );
}

export default FormsPreview;