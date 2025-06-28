import logo from "../img/Sheryians_logo.png";
import instagram from "../img/svg/instagram-svgrepo-com.svg";
import discord from "../img/svg/discord-svgrepo-com.svg";
import linkedin from "../img/svg/linkedin-svgrepo-com.svg";
import youtube from "../img/svg/youtube-168-svgrepo-com.svg";

function Footer() {
  return (
    <div className='h-screen py-20'>
      <div className='flex justify-evenly gap-20 border-gray-500 border-y-[1px] py-24 '>
        <div>
          <img className='w-6 h-7' src={logo} alt='logo' />
          <p className='text-sm font-[helveticaLight]'>
            Let's connect with our socials
          </p>
          <div className='flex gap-10'>
            <a href='https://www.instagram.com/sheryians_coding_school'>
              <img className='w-7 h-10' src={instagram} alt='icon' />
            </a>
            <a href='https://discord.gg/D23JkFqrgz'>
              <img className='w-7 h-10' src={discord} alt='icon' />
            </a>

            <a href='https://in.linkedin.com/company/the-sheryians-coding-school'>
              <img className='w-7 h-10' src={linkedin} alt='icon' />
            </a>
            <a href='https://www.youtube.com/@sheryians'>
              <img className='w-7 h-10' src={youtube} alt='icon' />
            </a>
          </div>
        </div>
        <div>
          <h1 className='font-bold'>COMPANY</h1>
          <ul className='leading-7'>
            <li className='text-sm font-[helveticaLight] leading-7 cursor-pointer hover:text-primary hover:underline'>
              Support
            </li>
            <li className='text-sm font-[helveticaLight] leading-7 cursor-pointer hover:text-primary hover:underline'>
              Privacy Policy
            </li>
            <li className='text-sm font-[helveticaLight] leading-7 cursor-pointer hover:text-primary hover:underline'>
              Terms and Condition
            </li>
            <li className='text-sm font-[helveticaLight] leading-7 cursor-pointer hover:text-primary hover:underline'>
              Price and Refund
            </li>
            <li className='text-sm font-[helveticaLight] leading-7 cursor-pointer hover:text-primary hover:underline'>
              Hire From Us
            </li>
            <li className='text-sm font-[helveticaLight] leading-7 cursor-pointer hover:text-primary hover:underline'>
              About Us
            </li>
          </ul>
        </div>
        <div>
          <h1 className='font-bold'>COMMUNITY</h1>
          <ul>
            <li className='text-sm font-[helveticaLight] leading-7 cursor-pointer hover:text-primary hover:underline'>
              Inertia
            </li>
            <li className='text-sm font-[helveticaLight] leading-7 cursor-pointer hover:text-primary hover:underline'>
              Discord
            </li>
          </ul>
        </div>
        <div>
          <h1 className='font-bold'>Get In Touch</h1>
          <ul>
            <li className='text-sm font-[helveticaLight] leading-7 cursor-pointer hover:text-primary hover:underline'>
              +91 9691778470
            </li>
            <li className='text-sm font-[helveticaLight] leading-7 cursor-pointer hover:text-primary hover:underline'>
              +91 8109161752
            </li>
            <li className='text-sm font-[helveticaLight] leading-7 cursor-pointer hover:text-primary hover:underline'>
              hello@sheryians.com
            </li>
            <li className='text-sm font-[helveticaLight] leading-7 cursor-pointer hover:text-primary hover:underline'>
              23-B, Indrapuri Sector C, Bhopal(MP), 462021
            </li>
          </ul>
        </div>
      </div>
      <div className='flex justify-center py-5 text-center'>
        <h1 className='font-[helveticaBold] text-sm'>
          Copyright © 2025 Sheryians Pvt. Ltd. <br /> All Rights Reserved.
        </h1>
      </div>
    </div>
  );
}

export default Footer;
