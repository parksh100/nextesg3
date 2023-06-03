export default function PageHeaderComponent(props) {
  return (
    <section className="container px-5 mx-auto py-14">
      <div>
        <h1 className=" text-gray-900 text-center font-bold mt-10 mb-3 text-2xl md:mt-20 lg:text-5xl lg:mt-40">
          {props.title}
        </h1>
        <p className="text-center text-gray-400 text-base lg:text-xl">
          {props.description1}
          <br />
          {props.description2}
        </p>
      </div>
    </section>
  );
}
