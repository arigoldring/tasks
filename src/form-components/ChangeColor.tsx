import React, { useState } from "react";

export function ChangeColor(): React.JSX.Element {
    const [color, setColor] = useState<string>("black");


    return (
        <div>
            <h3>Change Color</h3>
        </div>
    );
}
