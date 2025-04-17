"use client";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    review: "Had a wonderful stay! The apartments were clean and well-located.",
  },
  {
    id: 2,
    name: "Jane Smith",
    review: "Amazing experience! Highly recommend for families.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-48 bg-gray-100">
      <div className="container mx-auto px-8">
        <h2 className="text-4xl font-bold text-center mb-16">What Our Guests Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-lg shadow-lg p-6">
              <p className="text-gray-600 mb-4">"{testimonial.review}"</p>
              <h3 className="font-bold">{testimonial.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}