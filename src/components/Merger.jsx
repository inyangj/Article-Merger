import React, { useState } from "react";
import axios from "axios";
import CopyToClipboard from "react-copy-to-clipboard";

const Merger = () => {
  const [topicValue, setTopicValue] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [inputValue1, setInputValue1] = useState("");
  const [outputValue, setOutputValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const textApiUrl = "https://article-merger.onrender.com/merge_articles/texts";
  const linkApiUrl = "https://article-merger.onrender.com/merge_articles/link";




  const handleButtonClick = async () => {

    if (!inputValue && !inputValue1) {
      alert("Please enter a article or URL.");
      return;
    }
    setOutputValue("");
    setLoading(true);

    try {
      const isURL = /^(https?:\/\/)/.test(inputValue);

      if (isURL) {
        const linkPayload = {
          links: {
            link1: [inputValue],
            link2: [inputValue1],
          },
          topic: {
            topic: topicValue,
          },
        };

        const headers = {
          "Content-Type": "application/json",
        };

        const response = await axios.post(linkApiUrl, linkPayload, { headers });
        const apiData = await response.data.merged_content;
        console.log(apiData);

        setOutputValue(apiData);
      } else {
        const textPayload = {
          topic: {
            topic: topicValue,
          },
          docs: {
            doc1: inputValue,
            doc2: inputValue1,
          },
        };

        const headers = {
          "Content-Type": "application/json",
        };

        const response = await axios.post(textApiUrl, textPayload, { headers });
        const mergedText = await response.data.merged_content;
        console.log(mergedText);

        setOutputValue(mergedText);
      }
    } catch (error) {
      console.error("API Error:", error);
      alert("An error occurred while processing your request.");
    } finally {
      setLoading(false);
    }
  };

 

  const handleCopy = () => {
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 3000);
  };

  return (
    <div className="mt-[43px] sm:mt-0   w-full">
      <div className="sm:mt-[72px] sm:mb-[24px] sm:border"></div>
      <div className="sm:mx-[64px]">
        <h1 className="text-lg text-[#1B1B1B] font-medium">
          Get your articles merge in seconds
        </h1>
        <p className="text-xs text-[#939393] mb-[16px]">
          combine 2 articles to create another exclusive article
        </p>
        {outputValue !== "" ? (
          <div className="border border-solid border-[#1B1B1B] rounded-md min-h-[294px] relative">
            <div className="px-[10px] py-[20px]">
              <h1 className="text-center pb-3 font-medium text-lg">
                {topicValue}
              </h1>
              <p className="text-center pb-4">{outputValue}</p>
              <CopyToClipboard
                text={outputValue}
                onCopy={handleCopy}
              >
                <button className="absolute bottom-2 right-4 font-medium ">{isCopied ? "Copied!" : "Copy to Clipboard"}</button>
              </CopyToClipboard>
            </div>
          </div>
        ) : (
          <div className="border border-solid border-[#1B1B1B] rounded-md min-h-[294px]">
            <div className="px-[50px] py-[80px]">
            {loading ? (
                <img src="/load.gif" alt="icon"  className="mx-auto w-1/2" />
            ) : (
                <>
                <img src="/Convo.png" alt="convo" className="mx-auto" />
              <h1 className="text-center">No Article Generated</h1>
              <p className="text-center">
                Use the input below to get your result
              </p>
                </>
            )}
              
            </div>
          </div>
        )}

        <div className="mt-[32px]">
          <h2 className="text-[#1B1B1B] font-medium pb-2">Title here</h2>
          <input
            type="text"
            value={topicValue}
            onChange={(e) => setTopicValue(e.target.value)}
            className="w-[330px] h-10 border rounded-lg border-[#1B1B1B] outline-none p-2 sm:w-full"
          />

          <div className="sm:flex sm:gap-[32px] ">
            <div className="sm:w-1/2">
              <h2 className="mt-[32px] text-[#1B1B1B] font-medium pb-2">
                Article 1
              </h2>
              <textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                cols="30"
                rows="10"
                className="w-[330px] sm:w-full h-[150px] border rounded-lg border-[#1B1B1B] outline-none p-2"
              ></textarea>
            </div>

            <div className="sm:w-1/2">
              <h2 className="mt-[32px] text-[#1B1B1B] font-medium pb-2">
                Article 2
              </h2>
              <textarea
                value={inputValue1}
                onChange={(e) => setInputValue1(e.target.value)}
                cols="30"
                rows="10"
                className="w-[330px] sm:w-full h-[150px]  border rounded-lg p-2 border-[#1B1B1B] outline-none"
              ></textarea>
            </div>
          </div>
          <button
            onClick={handleButtonClick}
            disabled={loading}
            className="w-[290px] py-[12px] bg-[#6F47EB] mb-[54px] mt-[32px] font-medium rounded-lg text-white block"
          >
            {loading ? "Merging..." : "Merge"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Merger;
