'use client'
import React, { useState } from "react";

function Page() {
  const [lotteryNumbers, setLotteryNumbers] = useState([]);
  const [inputNumber, setInputNumber] = useState("");
  const [winningPrize, setWinningPrize] = useState("");

  const randomNumbers = () => {
    setWinningPrize("");
    setInputNumber(""); 
    const randomNumber1 = Math.floor(Math.random() * 1000);
    const randomNumber2 = Math.floor(Math.random() * 1000);
    const randomNumber3 = Math.floor(Math.random() * 1000);
    const randomNumber4 = Math.floor(Math.random() * 1000);
    const randomNumber5 = Math.floor(Math.random() * 1000);
    const randomNumber6 = Math.floor(Math.random() * 1000);
    const randomNumber7 = Math.floor(Math.random() * 100);

    const newLotteryNumbers = [
      randomNumber1.toString().padStart(3, "0"),
      randomNumber2.toString().padStart(3, "0"),
      randomNumber3.toString().padStart(3, "0"),
      randomNumber4.toString().padStart(3, "0"),
      randomNumber5.toString().padStart(3, "0"),
      randomNumber6.toString().padStart(3, "0"),
      randomNumber7.toString().padStart(2, "0"),
    ];

    const previousNumbers = [
      (Number(newLotteryNumbers[0]) - 1).toString().padStart(3, "0"),
      (Number(newLotteryNumbers[0]) - 2).toString().padStart(3, "0"),
    ];

    const beforeNumbers = [
      (Number(newLotteryNumbers[0]) - 1).toString().padStart(3, "0"),
      (Number(newLotteryNumbers[0]) + 1).toString().padStart(3, "0"),
    ];

    newLotteryNumbers.splice(5, 0, previousNumbers[0], previousNumbers[1]);
    newLotteryNumbers.splice(4, 0, beforeNumbers[0], beforeNumbers[1]);

    setLotteryNumbers(newLotteryNumbers);
  };

  const CheckNumbers = (inputNumber) => {
    const matchedNum = [];
    lotteryNumbers.forEach((number, index) => {
      if (inputNumber === number) {
        if (index === 0) {
          matchedNum.push("รางวัลที่ 1");
        } else if (index >= 1 && index <= 3) {
          matchedNum.push("รางวัลที่ 2");
        } else if (index >= 4 && index <= 5) {
          matchedNum.push("รางวัลเลขข้างเคียงรางวัลที่ 1");
        } else if (index === 6) {
          matchedNum.push("รางวัลเลขท้าย 2 ตัว");
        }
      }
    });
    if (inputNumber.slice(-2) === lotteryNumbers[0].slice(-2)) {
      matchedNum.push("รางวัลเลขท้าย 2 ตัว");
    }
    if (matchedNum.length > 0) {
      setWinningPrize(`เลข ${inputNumber} ถูกรางวัล : ${matchedNum.join(" และถูก")}`);
    } else {
      setWinningPrize(`เลข ${inputNumber} ไม่ถูกรางวัล`);
    }
  };
 
  const handleInputChange = (event) => {
    setInputNumber(event.target.value);
    setWinningPrize("");
  };

  const handleCheckNumbers = () => {
    if (inputNumber === "") {
      setWinningPrize("กรุณาป้อนเลขล็อตเตอรี่ก่อนกดปุ่มตรวจรางวัล");
    } else if (lotteryNumbers.length === 0) {
      setWinningPrize("กรุณากดดำเนินการสุ่มรางวัลก่อน");
    } else {
      CheckNumbers(inputNumber);
    }
  };

  return (
    <div className="card w-full mx-auto sm:w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 bg-base-100 shadow-xl mb-30" style={{ margin: '20px' }}>
      <p className="card-title">ผลการออกรางวัลล็อตเตอรี่</p>
      <div>
        <button className="btn btn-outline" onClick={randomNumbers}>
          ดำเนินการสุ่มรางวัล
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* หัวตาราง */}
          <thead>
            <tr className="text-lg">
              <th></th>
              <th>รางวัลที่ 1</th>
              <th>รางวัลที่ 2</th>
              <th>รางวัลเลขข้างเคียงรางวัลที่ 1</th>
              <th>รางวัลเลขท้าย 2 ตัว</th>
            </tr>
          </thead>
          <tbody>
            {/* แถวที่ 1 */}
            <tr className="text-lg">
              <td></td>
              <td>{lotteryNumbers[0]}</td>
              <td>{lotteryNumbers[1]}</td>
              <td>{lotteryNumbers[4]}</td>
              <td>{lotteryNumbers[0] ? lotteryNumbers[0].slice(-2) : ''}</td>
            </tr>
            {/* แถวที่ 2 */}
            <tr className="text-lg">
              <td></td>
              <td></td>
              <td>{lotteryNumbers[2]}</td>
              <td>{lotteryNumbers[5]}</td>
              <td></td>
            </tr>
            {/* แถวที่ 3 */}
            <tr className="text-lg">
              <td></td>
              <td></td>
              <td>{lotteryNumbers[3]}</td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="card-title">ตรวจรางวัลล็อตเตอรี่ Diversition</p>
      <label className='text-lg'>เลขล็อตเตอรี่<input type="text" placeholder="ป้อนเลข 3 หลัก" className="input input-bordered w-full max-w-xs" maxLength="3" style={{ margin: '15px' }} value={inputNumber} onChange={handleInputChange} /></label> 
      <div>
        <p className="text-lg" style={{ margin: '15px' }}>{winningPrize}</p>
        <button className="btn btn-outline" onClick={handleCheckNumbers}>
          ตรวจรางวัล
        </button>
      </div>
    </div>
  );
}

export default Page;
