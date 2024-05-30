"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { fetchProperty } from "@/utils/request";

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
  return <div>page</div>;
};

export default Property;
