import * as React from "react";
import Listing from "../components/listing";
import Spacer from "../components/spacer";

interface ListingsProps {}

const Listings: React.FC<ListingsProps> = ({}) => {
  return (
    <div className="flex flex-col items-stretch mt-32 px-12">
      <div className="flex-grow">
        <Listing
          imageURL="https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1490&q=80"
          title="Spacious Music City Sanctuary"
          address="20B Fern Avenue"
          beds={4}
          baths={3}
          guests={12}
          startingAtPrice={500}
          startingAtDuration="day"
        />
        <Spacer height={2} />
        <Listing
          imageURL="https://gallery.streamlinevrs.com/units-gallery/00/06/6C/thumbnail_157498265.jpeg"
          title="Spacious Music City Sanctuary"
          address="20B Fern Avenue"
          beds={4}
          baths={3}
          guests={12}
          startingAtPrice={500}
          startingAtDuration="day"
        />
        <Spacer height={2} />
        <Listing
          imageURL="https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1490&q=80"
          title="Spacious Music City Sanctuary"
          address="20B Fern Avenue"
          beds={4}
          baths={3}
          guests={12}
          startingAtPrice={500}
          startingAtDuration="day"
        />
      </div>
    </div>
  );
};

export default Listings;