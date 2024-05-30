"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { fetchProperty } from "@/utils/request";
import Spinner from "@/components/Spinner";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import PropertyHeaderImage from "@/components/PropertyHeaderImage";
import PropertyDetail from "@/components/PropertyDetail";

const Property = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchPropertiesData = async () => {
      if (!id) {
        return;
      }
      try {
        const property = await fetchProperty(id);
        setProperty(property);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    if (property === null) {
      fetchPropertiesData();
    }
  }, [id, property]);
  if (!property && !loading) {
    return (
      <h1 className="text-center text-2xl font-bold mt-10">
        Property Not Found
      </h1>
    );
  }
  return (
    <>
      {!loading && property && (
        <>
          <PropertyHeaderImage image={property.images[0]} />
          <section>
            <div className="container m-auto py-6 px-6">
              <Link
                href="/properties"
                className="text-blue-500 hover:text-blue-600 flex items-center"
              >
                <FaArrowLeft className="mr-2" /> Back to Properties
              </Link>
            </div>
            <PropertyDetail property={property} />
          </section>
        </>
      )}
    </>
  );
};
export default Property;
