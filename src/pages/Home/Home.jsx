import { Box} from "@mui/material";
import { SOneOnboarding } from "../../components/SOneOnboarding/SOneOnobarding";
import { STwoOnboarding } from "../../components/STwoOnboarding/STwoOnboarding";
import { SThreeOnboarding } from "../../components/SThreeOnboarding/SThreeOnboarding";


export function Home() {
    return (
        <Box>
            <SOneOnboarding/>
            <STwoOnboarding/>
            <SThreeOnboarding/>
        </Box>
    )
}

