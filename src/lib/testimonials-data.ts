export interface Testimonial {
  id: number;
  name: string;
  role: string;
  review: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Dr. Saman Weerasinghe",
    role: "University Vice-Chancellor",
    review:
      "The entire process was orchestrated flawlessly. The attention to detail and professional execution exceeded our highest expectations.",
    rating: 5,
  },
  {
    id: 2,
    name: "Corporate Director",
    role: "Leading Tech Firm",
    review:
      "Their multimedia setups and technical coordination transformed our product launch. A team that truly delivers extraordinary digital experiences.",
    rating: 5,
  },
  {
    id: 3,
    name: "Head of Administration",
    role: "Private Institute",
    review:
      "100% commitment to a transparent and stress-free process. The management and arrangements were a massive hit among our students.",
    rating: 5,
  },
  {
    id: 4,
    name: "Event Partner",
    role: "Vendor Network",
    review:
      "Working with them is a breeze. Their strong partnerships, modern layouts, and precise execution make them the top choice in the industry.",
    rating: 5,
  },
  {
    id: 5,
    name: "Sarah Perera",
    role: "Brand Manager",
    review:
      "An absolute delight to work with. They handled our corporate requirements with such elegance and creativity. Highly recommended!",
    rating: 5,
  },
  {
    id: 6,
    name: "Director of Operations",
    role: "Global Logistics Ltd",
    review:
      "The coordination and visual aesthetic were world-class. They are our go-to partner for all professional projects. They never disappoint.",
    rating: 5,
  },
  {
    id: 7,
    name: "Ruwani Fernando",
    role: "School Principal",
    review:
      "They managed our annual program seamlessly. The modern designs and overall flow were loved by everyone involved.",
    rating: 5,
  },
];
