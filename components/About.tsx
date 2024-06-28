import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <>
      <div className="p-5 mt-20">
        <div className="mx-[80px] max-lg:mx-5 mt-5 text-white">
          <h1 className="font-main text-2xl text-center">How it Works</h1>
          <div className="grid lg:grid-cols-12 gap-5 items-center">
            <div className="col-span-6">
              <p className="text-right max-sm:text-left">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                sit amet, consectetur, adipisci velit, sed quia non numquam eius
              </p>
            </div>

            <div className="col-span-6">
              <Image
                src="/coin4.png"
                alt="coin"
                width={400}
                height={400}
                className=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
