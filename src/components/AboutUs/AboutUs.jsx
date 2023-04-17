import PatternImg from "../../assets/images/patternImg.jpg";
import PatternImg2 from "../../assets/images/patternImg2.jpg";
import { SectionTitle } from "../SectionTitles";
import AboutImg from "../../assets/images/resources/aboutImg.jpg";

const AboutUs = (props) => {
  return (
    <section className="aboutUsWrap py-[4.5rem] md:py-[5.5rem] lg:py-[6.5rem] xl:py-[7.5rem] relative w-full">
      <div
        className="fixedBg bg-left-top bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${PatternImg})` }}
      ></div>
      <div className="container sm:container md:container lg:container xl:container 2xl:container mx-auto">
        <SectionTitle
          title="Chi siamo"
          titleInner="?"
          desc=""
        ></SectionTitle>
        <div className="aboutUs relative w-full p-[1.25rem] lg:p-[1.875rem] mt-[5.9375rem]">
          {/* <div
            className="aboutUsBg before:absolute before:inset-0 before:bg-gray before:rounded-[10px] before:sm:rounded-[1.25rem] before:md:rounded-[3.125rem] before:opacity-70 before:z-[1] bg-gray bg-blend-multiply absolute rounded-[10px] sm:rounded-[1.25rem] md:rounded-[3.125rem] inset-0 left-0 lg:left-[10.9375rem] bg-no-repeat bg-center bg-cover"
            style={{ backgroundImage: `url(${AboutUsBg})` }}
          ></div> */}
          <div
           className="featuredAreaWrap before:absolute before:inset-0 before:bgGrident1 before:rounded-[10]px before:sm:rounded-[1.25rem] before:md:rounded-[3.125rem] before:opacity-70 before:z-[1] bg-accent2 bgGrident1 absolute rounded-[10px] sm:rounded-[1.25rem] md:rounded-[3.125rem] inset-0 left-0 lg:left-[10.9375rem] bg-no-repeat bg-center bg-cover"
          ></div>
          <div className="grid gap-[1.875rem] lg:grid-cols-2 grid-cols-1">

            {/* Img */}
            <div>
              <div className="aboutImg relative mt-[-5.625rem] ml-0 lg:ml-[-1.875rem]">
                <img
                  className="rounded-[10px] sm:rounded-[1.25rem] md:rounded-[3.125rem] relative z-[1] w-full"
                  src={AboutImg}
                  alt=""
                ></img>
              </div>
            </div>
            <div>
              <div className="aboutCapWrap w-full">
                <div className="aboutCap relative rounded-[10px] sm:rounded-[1.25rem] md:rounded-[3.125rem] overflow-hidden z-[1] lg:py-12 xl:pt-[4.6875rem] xl:pb-[4.375rem] p-5 md:p-10 lg:px-[3.5rem] xl:px-20">
                  <div
                    className="aboutCapBg bg-white opacity-90 opc8 absolute rounded-in sm:rounded-[1.25rem] md:rounded-[3.125rem] inset-0 bg-no-repeat bg-center bg-cover z-[-1]"
                    style={{ backgroundImage: `url(${PatternImg2})` }}
                  ></div>
                  <h3 className="text-accent2 font-light text-[1.5rem] md:text-[1.875rem] leading-tight font-Poppins">
                  </h3>
                  <h4 className="text-accent2 font-light text-[1.325rem] md:text-[1.5rem] leading-normal font-Poppins">
                    Siamo L'associazione studentesca  {" "}
                    <span className="text-accent uppercase text-[1.325rem] md:text-[1.5rem]">
                      097Uni x GBU {" "}
                    </span>
                    <span>
                      nata nel 2090 e bla bla bla cazzate varie mattia è scarso ha la Y in fronte
                    </span>
                  </h4>
                  <ul className="grid grid-cols-1 gap-5 mt-6">
                    <li className="grid grid-cols-3 gap-4 text-[1rem] md:text-[1.125rem]">
                      <strong className="text-desc3 uppercase font-bold font-Poppins col-span-1">
                        Phone:
                      </strong>
                      <span className="text-desc2 font-semibold font-NunitoSans col-span-2">
                        <a
                          className="text-desc2 font-semibold font-NunitoSans hover:text-accent"
                          href="tel:+12 986 987 7867"
                          title=""
                        >
                          +39 333 333 3333
                        </a>
                      </span>
                    </li>
                    <li className="grid grid-cols-3 gap-4 text-[1rem] md:text-[1.125rem]">
                      <strong className="text-desc3 uppercase font-bold font-Poppins col-span-1">
                        Email:
                      </strong>
                      <span className="text-desc2 font-semibold font-NunitoSans col-span-2">
                        <a
                          className="text-desc2 font-semibold font-NunitoSans hover:text-accent"
                          href="mailto:gbupotenza@gmail.com"
                          title=""
                        >
                          gbupotenza@gmail.com
                        </a>
                      </span>
                    </li>
                    <li className="grid grid-cols-3 gap-4 text-[1rem] md:text-[1.125rem]">
                      <strong className="text-desc3 uppercase font-bold font-Poppins col-span-1">
                        Indirizzo
                      </strong>
                      <span className="text-desc2 font-semibold font-NunitoSans col-span-2">
                        <a
                        href="https://goo.gl/maps/gpuMdM7VEpJvy7Q76"
                        target="_blank"
                        >Via dell'Ateneo Lucano, 10, 85100, Potenza PZ</a>
                        
                      </span>
                    </li>
                    
                  </ul>
                  {/* <Signature className="fill-accent h-[4.5rem] mt-[2.375rem]"></Signature> */}
                  
                </div>
                
              </div>
            </div>
          </div>
          {/* About Us */}
        </div>
      </div>
      {/* About Us Wrap */}
      
    </section>
  );
};

export default AboutUs;
