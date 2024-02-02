import React from "react";
import { BsPerson, BsTwitterX } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { MdHome } from "react-icons/md";
import { IoMdNotifications, IoIosHeartEmpty } from "react-icons/io";
import { FaRegMessage } from "react-icons/fa6";
import { FaListAlt } from "react-icons/fa";
import { FaRegBookmark, FaRegCommentAlt } from "react-icons/fa";
import { MdGroup } from "react-icons/md";
import { CiCircleMore, CiSettings, CiGift } from "react-icons/ci";
import { HiGlobeAsiaAustralia } from "react-icons/hi2";
import { GoFileMedia } from "react-icons/go";
import { MdBallot } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
import { MdOutlinePinDrop } from "react-icons/md";
import { BiRepost } from "react-icons/bi";
import { LuBarChart2 } from "react-icons/lu";

function Header() {
  return (
    <>
      <div className=" flex mx-auto container w-full   bg-black text-white">
        <div className="child_container flex mx-auto w-10/12	p-3 ">
          <div className="first  w-[87%] flex flex-col items-center">
            <div className="logo py-3">
              <BsTwitterX className="text-2xl m-auto	" />
            </div>
            <div className="sidebar flex justify-end">
              <ul className="flex flex-col   space-y-3 px-[23px] sm:items-center ">
                <li className="flex justify-start items-center text-lg gap-2 cursor-pointer w-fit px-2 py-2 hover:bg-slate-900  hover:rounded-xl">
                  <MdHome className=" text-xl " />
                  <span className="hidden md:block">Home </span>{" "}
                </li>
                <li className="flex justify-start items-center text-lg gap-2 cursor-pointer w-fit px-2 py-2 hover:bg-slate-900  hover:rounded-xl">
                  <FaSearch className="text-xl 	" />
                  <span className="hidden md:block">Search</span>
                </li>
                <li
                  className="flex justify-start items-center text-lg gap-2 w-fit px-2 
                py-2 hover:bg-slate-900  hover:rounded-xl"
                >
                  <IoMdNotifications className=" " />
                  <span className="hidden md:block">Notifications</span>
                </li>
                <li className="flex justify-start items-center text-lg gap-2 cursor-pointer w-fit px-2 py-2 hover:bg-slate-900  hover:rounded-xl">
                  <FaRegMessage className=" " />
                  <span className="hidden md:block">Message</span>
                </li>
                <li className="flex justify-start items-center text-lg gap-2  cursor-pointer w-fit px-2 py-2 hover:bg-slate-900  hover:rounded-xl">
                  <FaListAlt className=" " />
                  <span className="hidden md:block">Lists</span>
                </li>
                <li className="flex justify-start items-center text-lg gap-2  py-2 hover:bg-slate-900  hover:rounded-xl">
                  <FaRegBookmark className="" />
                  <span className="hidden md:block">Bookmarks</span>
                </li>
                <li className="flex justify-start items-center text-lg gap-2  cursor-pointer w-fit px-2 py-2 hover:bg-slate-900  hover:rounded-xl">
                  <MdGroup className="text-xl " />
                  <span className="hidden md:block">Communities</span>
                </li>
                <li className="flex justify-start items-center text-lg gap-2  cursor-pointer w-fit px-2 py-2 hover:bg-slate-900  hover:rounded-xl">
                  <BsTwitterX className="text-xl " />
                  <span className="hidden md:block">Premium</span>
                </li>
                <li className="flex justify-start items-center text-lg gap-2  cursor-pointer w-fit px-2 py-2 hover:bg-slate-900  hover:rounded-xl">
                  <BsPerson className="text-xl " />
                  <span className="hidden md:block">profile</span>
                </li>
                <li className="flex justify-start items-center text-lg gap-2 cursor-pointer  w-fit px-2 py-2 hover:bg-slate-900  hover:rounded-xl">
                  <CiCircleMore className="text-xl " />
                  <span className="hidden md:block">More </span>
                </li>
                <div className="button w-full mr-3">
                  <button class="bg-blue-500 w-full  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                    Post
                  </button>
                </div>
              </ul>
            </div>
          </div>

          <div className="second  w-full border-l border-r">
            <div className="top flex m-3 relative">
              <div className="second_line absolute w-16 h-[3px]"></div>
              <div className=" absolute top-[36px] z-10 left-[44px] w-16 h-[3px] bg-blue-600"></div>
              <div className="left  w-1/2 flex  cursor-pointer justify-center font-bold text-lg">
                For You
              </div>
              <div className="center  cursor-pointer  w-1/2 flex justify-center font-bold text-lg">
                Folling
              </div>

              <div className="right mx-2 flex justify-center py-1 cursor-pointer">
                <CiSettings className=" text-xl " />
              </div>
            </div>
            <div className="w-full h-[1px] bg-gray-700"></div>

            <div className="whatishapp flex ">
              <div className="img my-3 mx-2 ">
                <img
                  className=" w-[100px] rounded-full"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzthxJh9NnYbosUvJqWaAwhJHmKS3Nj-kVpg&usqp=CAU"
                  alt="whatishapp"
                />
              </div>

              <div className="m-3 flex flex-col gap-4 ">
                <div className="p-[10px]">
                  <input
                    type="serach"
                    className="w-full   bg-black text-white outline-none  border-gray-200"
                    placeholder="What is happening"
                  />
                </div>

                <div className="globe border-b w-[129px] border-blue-800 text-blue-600 gap-1  flex items-center mx-5 ">
                  <div>
                    <HiGlobeAsiaAustralia className="cursor-pointer" />
                  </div>
                  <div className=" text-xs cursor-pointer	font-bold ">
                    Everyone can reply
                  </div>
                </div>
              </div>
            </div>
            <div className="blueIcon flex gap-2">
              <div className="leftIcon flex w-[70%] m-auto ml-4">
                <GoFileMedia className="cursor-pointer  text-blue-700 font-bold m-1" />
                <CiGift className="cursor-pointer  text-blue-700 font-bold m-1" />
                <MdBallot className="cursor-pointer  text-blue-700 font-bold m-1" />
                <FaCalendarAlt className="cursor-pointer  text-blue-700 font-bold m-1" />
                <MdOutlinePinDrop className="cursor-pointer  text-blue-700 font-bold m-1" />
              </div>
              <div className="rightIcon m-3">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                  Post
                </button>
              </div>
            </div>

            <div className="w-full h-[1px] bg-gray-700"></div>

            <div className="posts">
              <div className="post">
                <div className="flex">
                  <div className="image m-4">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/9131/9131529.png"
                      alt="user"
                      className="w-14"
                    />
                  </div>

                  <div className="content my-3">
                    <span className="font-bold text-sm hover:underline cursor-pointer text-white ">
                      non aesthetic things{" "}
                      <span className="text-gray-500 text-xs ">
                        @picturesFolder -6h
                      </span>
                    </span>
                    <div>Thief in Japan 🤣😂</div>
                    <div className="posting_img m-4 ml-0">
                      <img
                        className="rounded-xl"
                        src="https://scontent.frdp2-1.fna.fbcdn.net/v/t39.30808-6/245949117_1617144341961909_2335315489140764129_n.jpg?stp=cp0_dst-jpg_e15_q65_s480x480&_nc_cat=109&ccb=1-7&_nc_sid=ab7367&_nc_ohc=z_ttQoPKBD0AX_yCxNI&_nc_oc=AQkpFh87FhXrzddBZP92wWYONjN0Toax8h-MjoHt33JuBUcFXFcQlkTUFiMnV880iUA&_nc_ht=scontent.frdp2-1.fna&oh=00_AfCMknybRwyxO4Gma7yRqTLt_f43djkPWCAe9S7V9yAsHg&oe=65BE24AE"
                        alt="Japenese_thief"
                      />
                    </div>

                    <div className="icons flex   mr-2">
                      <div className="icon flex  gap-9 px-1  text-gray-500">
                        <span className="cursor-pointer flex items-center gap-1 justify-center">
                          <FaRegCommentAlt /> 1k
                        </span>
                        <span className="cursor-pointer flex items-center gap-1 justify-center">
                          <BiRepost /> 10
                        </span>
                        <span className="cursor-pointer flex items-center gap-1 justify-center">
                          <IoIosHeartEmpty /> 1.5k
                        </span>
                        <span className="cursor-pointer flex items-center gap-1 justify-center">
                          <LuBarChart2 />
                          140
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full h-[1px] bg-gray-700"></div>
              <div className="post">
                <div className="flex">
                  <div className="image m-4">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/9131/9131529.png"
                      alt="user"
                      className="w-14"
                    />
                  </div>

                  <div className="content my-3">
                    <span className="font-bold text-sm hover:underline cursor-pointer text-white ">
                      non aesthetic things{" "}
                      <span className="text-gray-500 text-xs ">
                        @picturesFolder -6h
                      </span>
                    </span>
                    <div>Funny Time Skip Naruto and Sasuke🤣😂</div>
                    <div className="posting_img m-4 ml-0">
                      <img
                        className="rounded-xl"
                        src="https://d.wattpad.com/story_parts/285901624/images/14627461f97e7fda515345061611.jpg"
                        alt="Japenese_thief"
                      />
                    </div>

                    <div className="icons flex   mr-2">
                      <div className="icon flex  gap-9 px-1  text-gray-500">
                        <span className="cursor-pointer flex items-center gap-1 justify-center">
                          <FaRegCommentAlt /> 1k
                        </span>
                        <span className="cursor-pointer flex items-center gap-1 justify-center">
                          <BiRepost /> 10
                        </span>
                        <span className="cursor-pointer flex items-center gap-1 justify-center">
                          <IoIosHeartEmpty /> 1.5k
                        </span>
                        <span className="cursor-pointer flex items-center gap-1 justify-center">
                          <LuBarChart2 />
                          140
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full h-[1px] bg-gray-700"></div>
              <div className="post">
                <div className="flex">
                  <div className="image m-4">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/9131/9131529.png"
                      alt="user"
                      className="w-14"
                    />
                  </div>

                  <div className="content my-3">
                    <span className="font-bold text-sm hover:underline cursor-pointer text-white ">
                      non aesthetic things{" "}
                      <span className="text-gray-500 text-xs ">
                        @picturesFolder -6h
                      </span>
                    </span>
                    <div>luffy and boa hancock 😍</div>
                    <div className="posting_img m-4 ml-0">
                      <img
                        className="rounded-xl"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWOGGiqmbYJh5dXtrKufVi6mAX2Q9VtNKo_A&usqp=CAU"
                        alt="Japenese_thief"
                      />
                    </div>

                    <div className="icons flex   mr-2">
                      <div className="icon flex  gap-9 px-1  text-gray-500">
                        <span className="cursor-pointer flex items-center gap-1 justify-center">
                          <FaRegCommentAlt /> 1k
                        </span>
                        <span className="cursor-pointer flex items-center gap-1 justify-center">
                          <BiRepost /> 10
                        </span>
                        <span className="cursor-pointer flex items-center gap-1 justify-center">
                          <IoIosHeartEmpty /> 1.5k
                        </span>
                        <span className="cursor-pointer flex items-center gap-1 justify-center">
                          <LuBarChart2 />
                          140
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full h-[1px] bg-gray-700"></div>
              <div className="post">
                <div className="flex">
                  <div className="image m-4">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/9131/9131529.png"
                      alt="user"
                      className="w-14"
                    />
                  </div>

                  <div className="content my-3">
                    <span className="font-bold text-sm hover:underline cursor-pointer text-white ">
                      non aesthetic things{" "}
                      <span className="text-gray-500 text-xs ">
                        @picturesFolder -6h
                      </span>
                    </span>
                    <div>
                      What happens between the Heart Pirates and Blackbeard
                      Pirates?😱
                    </div>
                    <div className="posting_img m-4 ml-0">
                      <img
                        className="rounded-xl"
                        src="https://www.dexerto.com/cdn-cgi/image/width=1920,quality=75,format=auto/https://editors.dexerto.com/wp-content/uploads/2023/04/24/one-piece-law-vs-blackbeard.jpeg "
                        alt="Japenese_thief"
                      />
                    </div>

                    <div className="icons flex   mr-2">
                      <div className="icon flex  gap-9 px-1  text-gray-500">
                        <span className="cursor-pointer flex items-center gap-1 justify-center">
                          <FaRegCommentAlt /> 1k
                        </span>
                        <span className="cursor-pointer flex items-center gap-1 justify-center">
                          <BiRepost /> 10
                        </span>
                        <span className="cursor-pointer flex items-center gap-1 justify-center">
                          <IoIosHeartEmpty /> 1.5k
                        </span>
                        <span className="cursor-pointer flex items-center gap-1 justify-center">
                          <LuBarChart2 />
                          140
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full h-[1px] bg-gray-700"></div>
            </div>
          </div>

          <div className="third w-full">
            <div className="search m-1">
              <div class="relative">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    class="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300  bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 rounded-full"
                  placeholder="Search Mockups, Logos..."
                  required
                />
              </div>
            </div>

            <div className="whats m-3 py-5   rounded-xl bg-[#16181c] space-y-3">
              <h1 className=" text-xl font-bold px-3 ">What's Happening</h1>
              <div className="item my-1 p-3 hover:bg-gray-800 cursor-pointer">
                <div className=" text-sm text-gray-200">Trending in India</div>
                <div className="text-bold">Orry</div>
                <div className="text-sm text-gray-200">20.3k posts</div>
              </div>
              <div className="item my-1 p-3 hover:bg-gray-800 cursor-pointer">
                <div className=" text-sm text-gray-200">Trending in India</div>
                <div className="text-bold">Sasuke Uchia</div>
                <div className="text-sm text-gray-200">20.3k posts</div>
              </div>
              <div className="item my-1 p-3 hover:bg-gray-800 cursor-pointer">
                <div className=" text-sm text-gray-200">Trending in India</div>
                <div className="text-bold text-white ">#Itachi uchia</div>
                <div className="text-sm text-gray-200">20.3k posts</div>
              </div>
              <div className="item my-1 p-3 hover:bg-gray-800 cursor-pointer">
                <div className=" text-sm text-gray-200">Trending in India</div>
                <div className="text-bold">#Madar Uchia</div>
                <div className="text-sm text-gray-200">20.3k posts</div>
              </div>
            </div>

            <div className="who m-3 py-5   rounded-xl bg-[#16181c] space-y-3">
              <h1 className=" text-xl font-bold px-3 ">Who to follow</h1>
              <div className="item my-1 p-3">
                <div className="visit_maldives  items-center mb-1 flex justify-between w-full cursor-pointer  hover:bg-gray-800  ">
                  <div className="first_follower flex justify-center item-center ">
                    <div className="flex justify-center items-center ">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsdkw889HZvjpv8M_j23KLE3nN70N2_2o9sw&usqp=CAU"
                        className="w-11 "
                        alt=""
                      />
                    </div>
                    <div className="first_follow_details px-2 py-1">
                      <div className="first_name text-base">visitmaldives</div>
                      <div className="first_name text-gray-500 text-xs ">
                        @visitmaldives
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    class="my-2 text-gray-900 text-blod bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                  >
                    Follow
                  </button>
                </div>

                <div className="visit_maldives  items-center mb-1 flex justify-between w-full cursor-pointer  hover:bg-gray-800  ">
                  <div className="first_follower flex justify-center item-center ">
                    <div className="flex justify-center items-center ">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfXGIXL8BBmxHSITyyMJP2Ehiavfw6jybkAA&usqp=CAU"
                        className="w-11 "
                        alt=""
                      />
                    </div>
                    <div className="first_follow_details px-2 py-1">
                      <div className="first_name text-base">Sasuke Uchia✅</div>
                      <div className="first_name text-gray-500 text-xs ">
                        @uchia
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    class=" my-2 text-gray-900 text-blod bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                  >
                    Follow
                  </button>
                </div>

                <div className="visit_maldives  items-center mb-1 flex justify-between w-full cursor-pointer  hover:bg-gray-800  ">
                  <div className="first_follower flex justify-center item-center ">
                    <div className="flex justify-center items-center ">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3ODjwOH6CNZfdFY6Rw6U1prkY-LVg51_-xw&usqp=CAU"
                        className="w-11 "
                        alt=""
                      />
                    </div>
                    <div className="first_follow_details px-2 py-1">
                      <div className="first_name text-base">Shanks</div>
                      <div className="first_name text-gray-500 text-xs ">
                        @Haki
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    class=" my-2 text-gray-900 text-blod bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                  >
                    Follow
                  </button>
                </div>
              </div>
              <a href="#" className=" px-3 mt-1 text-blue-500 text-sm ">
                Show more
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
