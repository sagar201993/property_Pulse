import React from "react";
import properties from "@/properties.json";
import PropertyCard from "./PropertyCard";

const HomeProperties = () => {
  const recentproperties = properties
    .sort(() => Math.random() - Math.random())
    .slice(0, 3);
  return (
    <>
      <section className="px-4 py-6">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-blue-500 mb-6 text-center">
            Recent Properties
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Property items can be mapped here */}

            {recentproperties.map((property) => (
              <PropertyCard key={property._id} property={property} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeProperties;
