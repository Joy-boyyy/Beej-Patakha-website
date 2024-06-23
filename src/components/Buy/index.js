import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { FaStar } from "react-icons/fa";

import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

import "./index.css";

const Buy = () => {
  return (
    <div className="BuyParerntDiv">
      <div className="BuyHeaderDiv">
        <div className="BuyLogoDiv">
          <h1>FireFly</h1>
        </div>

        <div className="BuyH1Btn">
          <h1>
            The choice is yours. <br /> Because they don't have one.
          </h1>

          <button type="button" className="cursorPo">QUICK VIEW</button>
        </div>
      </div>

      <div className="BuyMidDiv">
        <div className="BuyAboutDiv">
          <div className="BuyAboutH1Div">
            <div className="BuyHr"> </div>
            <h1>About</h1>
            <div className="BuyHr"> </div>
          </div>

          <div className="BuyProductDesc">
            <p>
              Our products are crafted exclusively from the dreams and screams
              of young kids who wanted to show their mastery in their chosen
              fields, but were directed towards a factory for daily wages. Each
              cracker bursts brighter than their lost smiles, and can be heard
              louder than their cries for miles. Buy them, burst them, brag
              about them.
            </p>
            <h2>The choice is yours. Because they don’t have one.</h2>
          </div>
        </div>

        <div className="BuyOurProductDiv">
          <div className="BuyOurProductsH1">
            <div className="BuyHr"></div>
            <h1> Our Products </h1>
            <div className="BuyHr"></div>
          </div>




          <div className="BuyCards">

            <div className="BuyParentCard">
              <div>
                <img
                  className="Buyimg"
                  src="https://i0.wp.com/1.bp.blogspot.com/-mJLtxiMUAhQ/X6jjGPLwe9I/AAAAAAAHV2Y/ma3lZDYJJDMKTtyJfo8OOEnmq3lP074cACLcBGAsYHQ/s1600/Beej-Patakha%2B%25283%2529.jpg?w=640&ssl=1"
                  alt="beejpatakha img"
                />
              </div>

              <div className="htBtnDiv">
                <h2>Raju Rassibomb</h2>

                <Popup
                  modal
                  trigger={
                    <button type="button" className="quickViewClass">
                      QUICK VIEW
                    </button>
                  }
                  position="right center"
                >
                  {(close) => (
                    <div className="PopupMain">
                      <div className="allMyCards">
                          <img
                            className="popupImg"
                            src="https://1.bp.blogspot.com/-mJLtxiMUAhQ/X6jjGPLwe9I/AAAAAAAHV2Y/ma3lZDYJJDMKTtyJfo8OOEnmq3lP074cACLcBGAsYHQ/s1600/Beej-Patakha%2B%25283%2529.jpg"
                            alt="beejpataka"
                          />
      
                        <div className="popupAllCardImgs">
                       
                            <img
                              className="popupImgCards"
                              src="https://1.bp.blogspot.com/-mJLtxiMUAhQ/X6jjGPLwe9I/AAAAAAAHV2Y/ma3lZDYJJDMKTtyJfo8OOEnmq3lP074cACLcBGAsYHQ/s1600/Beej-Patakha%2B%25283%2529.jpg"
                              alt="beejpataka"
                            />
                    
                       
                            <img
                              className="popupImgCards"
                              src="https://1.bp.blogspot.com/-6-86JcYmvjE/X6jjInM-lOI/AAAAAAAHV2g/6esPLNN8w2oPQOiExS0QAm0ehH-4CQSugCLcBGAsYHQ/s1600/Beej-Patakha%2B%25286%2529.jpg"
                              alt="beejpataka"
                            />
                        

                          
                            <img
                              className="popupImgCards"
                              src="https://i0.wp.com/1.bp.blogspot.com/-_jwxzuEI1S8/X6jjIowfIuI/AAAAAAAHV2k/hLDTILBWcnMoDpseLgFFRa2odG-ue4dDgCLcBGAsYHQ/s1600/Beej-Patakha%2B%25287%2529.jpg?ssl=1"
                              alt="beejpataka"
                            />
                         

                         
                            <img
                              className="popupImgCards"
                              src="https://i0.wp.com/1.bp.blogspot.com/-zJbFgYktrgQ/X6jjIaDTfXI/AAAAAAAHV2c/hyAnIAnMrU4Zi-sAgEChIc_2ytmRMgoRACLcBGAsYHQ/s1600/Beej-Patakha%2B%25285%2529.jpg?ssl=1"
                              alt="beejpataka"
                            />
                       
                        </div>
                      </div>


                      <div className="rightSide">
                        <div className="btnWithH1">
                          <h1 className="RajuH1">Raju Rassibomb</h1>
                          <button
                            className="closeBtn"
                            type="button"
                            onClick={() => {
                              close();
                            }}
                          >
                            <IoMdClose size={30} />
                          </button>
                        </div>

                        <div className="mrpDiv">
                          <h1 className="mrpH1">MRP: </h1>
                          <h1>Raju's Dreams/- </h1>
                        </div>

                        <div className="dottedBorder"></div>
                        <div>
                          <p className="prDesc">Product Descriptions:</p>
                          <p className="proDetal">
                            This product packs an extra punch, thanks to the
                            literal blood, sweat and tears of a young boy.
                          </p>
                        </div>
                        <div className="dottedBorder"></div>

                        <div className="ulDIv">
                          <p className="prDesc">Product Contents:</p>

                          <ul>
                            <li className="starLi">
                              <FaStar fill="yello" /> 10 hand-hurting pieces of
                              rassi bombs
                            </li>
                            <li className="starLi">
                              <FaStar fill="yello" /> Jilled with great pain
                            </li>
                            <li className="starLi">
                              <FaStar fill="yello" /> Raju's hopes
                            </li>
                          </ul>
                        </div>
                        <div className="dottedBorder"></div>
                       
                        <div>
                          <p className="shopingTime">Shopping Time:</p>
                          <p>
                            Before Raju understands that his dreams do not
                            matter.
                          </p>
                        </div>

                          <button type="button" className="ChooseBtn">Choose Now</button>
                        
                      </div>
                      <div></div>
                    </div>
                    


                 )}
                </Popup>
              </div>
            </div>



            <div className="BuyParentCard">
              <div>
                <img
                  className="Buyimg"
                  src="https://i0.wp.com/1.bp.blogspot.com/-mJLtxiMUAhQ/X6jjGPLwe9I/AAAAAAAHV2Y/ma3lZDYJJDMKTtyJfo8OOEnmq3lP074cACLcBGAsYHQ/s1600/Beej-Patakha%2B%25283%2529.jpg?w=640&ssl=1"
                  alt="beejpatakha img"
                />
              </div>

              <div className="htBtnDiv">
                <h2>Ladiyo ki Rani Chani</h2>
   
                <Popup
                  modal
                  trigger={
                    <button type="button" className="quickViewClass">
                      QUICK VIEW
                    </button>
                  }
                  position="right center"
                >
                  {(close) => (
                    <div className="PopupMain">
                      <div className="allMyCards">
                          <img
                            className="popupImg"
                            src="https://1.bp.blogspot.com/-mJLtxiMUAhQ/X6jjGPLwe9I/AAAAAAAHV2Y/ma3lZDYJJDMKTtyJfo8OOEnmq3lP074cACLcBGAsYHQ/s1600/Beej-Patakha%2B%25283%2529.jpg"
                            alt="beejpataka"
                          />
      
                        <div className="popupAllCardImgs">
                       
                            <img
                              className="popupImgCards"
                              src="https://1.bp.blogspot.com/-mJLtxiMUAhQ/X6jjGPLwe9I/AAAAAAAHV2Y/ma3lZDYJJDMKTtyJfo8OOEnmq3lP074cACLcBGAsYHQ/s1600/Beej-Patakha%2B%25283%2529.jpg"
                              alt="beejpataka"
                            />
                    
                       
                            <img
                              className="popupImgCards"
                              src="https://1.bp.blogspot.com/-6-86JcYmvjE/X6jjInM-lOI/AAAAAAAHV2g/6esPLNN8w2oPQOiExS0QAm0ehH-4CQSugCLcBGAsYHQ/s1600/Beej-Patakha%2B%25286%2529.jpg"
                              alt="beejpataka"
                            />
                        

                          
                            <img
                              className="popupImgCards"
                              src="https://i0.wp.com/1.bp.blogspot.com/-_jwxzuEI1S8/X6jjIowfIuI/AAAAAAAHV2k/hLDTILBWcnMoDpseLgFFRa2odG-ue4dDgCLcBGAsYHQ/s1600/Beej-Patakha%2B%25287%2529.jpg?ssl=1"
                              alt="beejpataka"
                            />
                         

                         
                            <img
                              className="popupImgCards"
                              src="https://i0.wp.com/1.bp.blogspot.com/-zJbFgYktrgQ/X6jjIaDTfXI/AAAAAAAHV2c/hyAnIAnMrU4Zi-sAgEChIc_2ytmRMgoRACLcBGAsYHQ/s1600/Beej-Patakha%2B%25285%2529.jpg?ssl=1"
                              alt="beejpataka"
                            />
                       
                        </div>
                      </div>


                      <div className="rightSide">
                        <div className="btnWithH1">
                          <h1 className="RajuH1">Ladiyo ki Rani</h1>
                          <button
                            className="closeBtn"
                            type="button"
                            onClick={() => {
                              close();
                            }}
                          >
                            <IoMdClose size={30} />
                          </button>
                        </div>

                        <div className="mrpDiv">
                          <h1 className="mrpH1">MRP: </h1>
                          <h1>Raju's Dreams/- </h1>
                        </div>

                        <div className="dottedBorder"></div>
                        <div>
                          <p className="prDesc">Product Descriptions:</p>
                          <p className="proDetal">
                            This product packs an extra punch, thanks to the
                            literal blood, sweat and tears of a young boy.
                          </p>
                        </div>
                        <div className="dottedBorder"></div>

                        <div className="ulDIv">
                          <p className="prDesc">Product Contents:</p>

                          <ul>
                            <li className="starLi">
                              <FaStar fill="yello" /> 10 hand-hurting pieces of
                              rassi bombs
                            </li>
                            <li className="starLi">
                              <FaStar fill="yello" /> Jilled with great pain
                            </li>
                            <li className="starLi">
                              <FaStar fill="yello" /> Raju's hopes
                            </li>
                          </ul>
                        </div>
                        <div className="dottedBorder"></div>
                       
                        <div>
                          <p className="shopingTime">Shopping Time:</p>
                          <p>
                            Before Raju understands that his dreams do not
                            matter.
                          </p>
                        </div>

                          <button type="button" className="ChooseBtn">Choose Now</button>
                        
                      </div>
                      <div></div>
                    </div>
                    


                 )}
                </Popup>
              </div>
            </div>
          </div>

          <div className="BuyOurProductsH1">
            <div className="BuyHr"></div>
          </div>
        </div>
      </div>







      <div className="BuyBottom">
        <div>
          <img
            className="bottomImg"
            src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/ff11d744090927.5898416cdee2c.jpg"
            alt="flower"
          />
        </div>

        <div className="bottomHSpan">
          <div>
            <h2 className="followUs">Follow us on</h2>
          </div>
          <div className="bottomFollowSpan">
            <span>
              <FaInstagramSquare size={20} />
            </span>
            <span>
              <FaYoutube size={20} />
            </span>
            <span>
              <FaTwitterSquare size={20} />
            </span>
            <span>
              <FaFacebook size={20} />
            </span>
            <span>
              <FaLinkedin size={20} />
            </span>
          </div>
        </div>
        <div>
          <img
            className="bottomImg"
            src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/ff11d744090927.5898416cdee2c.jpg"
            alt="flower"
          />
        </div>
      </div>
    </div>
  );
};

export default Buy;

// https://mir-s3-cdn-cf.behance.net/project_modules/fs/ff11d744090927.5898416cdee2c.jpg
