import Slider from "@/components/Slider";
import { slidesDataHome } from "@/constants/data";

const BlogSection = () => {
  return (
    <section className="w-full bg-primary-background text-primary-text px-6 py-20">
      <h2 className="text-4xl font-valueSansProBold mb-8">Vores blog</h2>
      <Slider slides={slidesDataHome} />
    </section>
  );
};

export default BlogSection;
