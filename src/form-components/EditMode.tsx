import React, { useState } from "react";

export function EditMode(): React.JSX.Element {
    const [isEditMode, setIsEditMode] = useState<boolean>(false);
    return (
        <div>
            <h3>Edit Mode</h3>
        </div>
    );
}
