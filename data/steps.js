import Download from "@/icons/Download";
import Remove from "@/icons/Remove";
import Upload2 from "@/icons/Upload2";

export const steps = [
    {
        icon: <Upload2 />,
        heading: "Upload image",
        step: "First upload your image"
    },
    {
        icon: <Remove />,
        heading: "Remove Background",
        step: "Then remove the background"
    },
    {
        icon: <Download />,
        heading: "Download image",
        step: "Finally download your image"
    }
]