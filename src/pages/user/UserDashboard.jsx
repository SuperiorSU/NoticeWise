import React, { useRef, useState, useEffect } from "react";
import html2canvas from "@nidi/html2canvas";
import jsPDF from "jspdf";
import { MdOutlineFileDownload } from "react-icons/md";
import axios from "axios";
import { toast } from "react-toastify";
import bg from "../../assets/bgtu.jpg";

const UserDashboard = () => {
  const divRef = useRef(null);
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const res = await axios.get("http://127.0.0.1:4000/api/v1/getNotices");
        setNotices(res.data.notices); // Assuming res.data.notices is an array of notices
      } catch (error) {
        console.error("Error occurred while fetching notices:", error);
        toast.error("Failed to fetch notices. Please try again later.");
      }
    };

    fetchNotices();
  }, []);

  const printDocument = (id) => {
    const input = document.getElementById(id);

    html2canvas(input, { scrollY: -window.scrollY }).then((canvas) => {
      const imgData = canvas.toDataURL("image/jpeg", 1.0);
      const pdf = new jsPDF("p", "mm", "a4");
      const imgWidth = pdf.internal.pageSize.getWidth();
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(imgData, "JPEG", 0, 0, imgWidth, imgHeight);
      pdf.save("download.pdf");
    });
  };

  const onSaveHandle = (id) => {
    printDocument(id);
    toast.success("Notice saved successfully");
  };

  return (
    <div className="bg-gray-300">
      <div className="">
        <div>
          <h1 className="text-3xl text-center py-6 font-bold text-blue-500">
            All Notices
          </h1>
        </div>
        <div className="">
          {notices.map((notice, index) => (
            <div
              key={index}
              id={`notice-${index}`}
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
                Ref. No: {notice.title}
              </p>
              <p className="absolute top-[180px] left-[590px] text-[15px]">
                Date: {new Date(notice.date).toLocaleDateString()}
              </p>
              {/* <p
                className="absolute font-semibold text-4xl top-[280px] left-[300px]"
                style={{ color: "white" }}
                >
                NOTIFICATION
            </p> */}
              {/* <p className="">
                {notice.description}
            </p> */}
              <p
                className="absolute font-semibold text-4xl top-[280px] left-[300px]"
                style={{ color: "white" }}
                >
                NOTIFICATION
                </p>
                <p className="">
                <textarea
                name="description"
                value={notice.description}
                className="absolute top-[400px] left-[200px] w-[500px] bg-transparent h-[400px] "
                placeholder="Enter your notification here"
                
                />
                </p>
            <div className="mb5 my-3 text-center">
              <button
                onClick={() => onSaveHandle(`notice-${index}`)}
                className="bg-blue-600 hover:bg-black duration-150 mx-2 text-white font-bold py-2 px-4"
              >
                Download <MdOutlineFileDownload className="inline text-white " size={24} />
              </button>
            </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
