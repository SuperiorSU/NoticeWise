import React, { useRef, useState } from "react";
import html2canvas from "@nidi/html2canvas";
import jsPDF from "jspdf";
import bg from '../../assets/bgtu.jpg'
import { MdOutlineFileDownload } from "react-icons/md";
import axios from "axios";
import { toast } from "react-toastify";
// import Sidebar from "../../pages/admin/Sidebar";
// import TeachsideBar from "../TeachsideBar";

const Notice = () => {
  const divRef = useRef(null);
  const [data, setData] = useState({
    title: "",
    description: "",
    date: '',
    // postedBy: "Vaishnavi Bajpayi",
    batch: "The Uniques",
  });

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  

  const printDocument = () => {
    const input = divRef.current;

    html2canvas(input, { scrollY: -window.scrollY }).then((canvas) => {
      const imgData = canvas.toDataURL("image/jpeg", 1.0);
      const pdf = new jsPDF("p", "mm", "a4");
      const imgWidth = pdf.internal.pageSize.getWidth();
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(imgData, "JPEG", 0, 0, imgWidth, imgHeight);
      pdf.save("download.pdf");
    });
  };
  const onSaveHandle = async () => {
    try {
      const res = await axios.post("http://127.0.0.1:4000/api/v1/createNotice", data);
      console.log(res);
      toast.success("Notice saved successfully");
      printDocument();
    } catch (error) {
      console.error("Error occurred while saving notice:", error);
      toast.error("Failed to save notice. Please try again later.");
    }
  };
  

  return (
    <div className="bg-gray-400">
      
      <div className="">
        
        <div className="">
        <div className="mb5 my-3 text-center">
        {/* <button
          className="bg-blue-950 hover:bg-red-500 duration-150 mx-2  text-white font-bold py-2 px-4"
          onClick={() => printDocument()}
        >
          Download
        </button> */}
        <button
        onClick={onSaveHandle}
          className="bg-blue-600 hover:bg-black duration-150 mx-2 text-white font-bold py-2 px-4"
         
        >
          Download <MdOutlineFileDownload className="inline text-white " size={24} />
        </button>
        <button
          className="bg-blue-600 hover:bg-black duration-150 mx-2 text-white font-bold py-2 px-4 "
          
        >
          Disperse
        </button>
      </div>
                    <div
                ref={divRef}
                className="mt4 relative"
                style={{
                background: `url(${bg})`,
                backgroundSize: "cover",
                width: "210mm",
                minHeight: "297mm",
                margin: "auto",
                }}
            >
                <p className="absolute top-[180px] left-[100px] text-[15px]">
                Ref. No:{" "}
                <input
                    className="relative top-[3px] left-1 pb-2 bg-transparent inline-block leading-[29px]  border-0 ring-0 focus:ring-0 focus:border-0 focus:ring-transparent focus:border-transparent align-middle"
                    type="text"
                    value={data.title}
                    onChange={changeHandler}
                    name="title"
                    placeholder="Type the serial no."
                />
                </p>
                <p className="absolute top-[180px] left-[590px] text-[15px]">
                Date:{" "}
                <input
                    name="date"
                    className="h-[max-content] leading-relaxed relative top-[3px] left-1 align-middle bg-transparent border-0 ring-0 focus:ring-0 focus:border-0 focus:ring-transparent focus:border-transparent pb-2 inline-block "
                    value={data.date}
                    onChange={changeHandler}
                    type="date"
                />
                </p>
                <p
                className="absolute font-semibold text-4xl top-[280px] left-[300px]"
                style={{ color: "white" }}
                >
                NOTIFICATION
                </p>
                <p className="">
                <textarea
                name="description"
                value={data.description}
                className="absolute top-[400px] left-[200px] w-[500px] bg-transparent h-[400px] "
                placeholder="Enter your notification here"
                onChange={changeHandler}
                />
                </p>
            </div>
        </div>
      </div>
      
    </div>
  );
};

export default Notice;