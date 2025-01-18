import { assets } from '../assets/assets';
import NewsLetterBox from '../Components/NewsLetterBox';
import Title from '../Components/Title';

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className="flex flex-col md:flex-row gap-16 my-10">
        <img
          src={assets.about_img}
          alt=""
          className="w-full md:max-w-[450px] "
        />

        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
          LuxeLore was created with a drive for innovation and a mission to reshape the way people shop online. Our journey started with a straightforward yet impactful idea: to build a platform that allows customers to easily explore, discover, and purchase an array of exceptional products from the comfort of their homes.
          </p>
          <p>
          Since our founding, we’ve committed ourselves to curating a broad selection of top-quality items that cater to a wide range of tastes and preferences. From elegant fashion and beauty to state-of-the-art electronics and chic home essentials, LuxeLore offers a vast assortment sourced from reliable brands and trusted suppliers. Our goal is to provide a seamless shopping experience where excellence, style, and convenience come together.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            {' '}
            At LuxeLore, our mission is to empower our customers with unparalleled choice, convenience, and confidence. We are committed to offering a seamless shopping experience that goes beyond expectations, ensuring satisfaction at every step—from browsing and ordering to fast delivery and exceptional after-purchase service.
          </p>
        </div>
      </div>

      <div className="py-4 text-2xl">
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className="flex flex-col md:flex-row mb-20 text-sm gap-4">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance</b>
          <p className="text-gray-600">
            We take pride in offering only the highest quality products that
            meet our stringent standards for durability, performance, and value.{' '}
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience</b>
          <p className="text-gray-600">
            Our user-friendly website and mobile app make it easy to browse,
            compare, and purchase products on the go.{' '}
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Services</b>
          <p className="text-gray-600">
            Our dedicated team of customer service representatives is available
            around the clock to assist you with any queries or concerns you may
            have.{' '}
          </p>
        </div>
      </div>

      <NewsLetterBox />
    </div>
  );
};

export default About;
