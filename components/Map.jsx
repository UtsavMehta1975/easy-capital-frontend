import React from "react";

const Map = () => {
    return (
        <div>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3506.6541342209484!2d77.05942537549558!3d28.489960875742888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDI5JzIzLjkiTiA3N8KwMDMnNDMuMiJF!5e0!3m2!1sen!2sin!4v1713088259055!5m2!1sen!2sin"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                width="100%"
                height="450"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default Map;
