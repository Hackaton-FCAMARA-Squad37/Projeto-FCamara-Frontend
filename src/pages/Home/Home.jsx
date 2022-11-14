import { Box} from "@mui/material";
import { SOneOnboarding } from "../../components/SOneOnboarding/SOneOnobarding";
import { STwoOnboarding } from "../../components/STwoOnboarding/STwoOnboarding";
import { SThreeOnboarding } from "../../components/SThreeOnboarding/SThreeOnboarding";
import { SFourOnboarding } from "../../components/SFourOnboarding/SFourOnboarding";
import { SFiveOnboarding } from "../../components/SFiveOnboarding/SFiveOnboarding";
import { SSixOnboarding } from "../../components/SSixOnboarding/SsixOnboarding";
import { SSevenOnboarding } from "../../components/SSevenOnboarding/SSevenOnboarding";


export function Home() {
    return (
        <Box>
            <SOneOnboarding/>
            <STwoOnboarding/>
            <SThreeOnboarding/>
            <SFourOnboarding/>
            <SFiveOnboarding/>
            <SSixOnboarding/>
            <SSevenOnboarding/>
        </Box>
    )
}

