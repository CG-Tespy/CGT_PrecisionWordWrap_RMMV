import { PrecisionOverflowFinder } from './Structures/PrecisionOverflowFinder';
import { PrecisionWordWrapper } from './Structures/PrecisionWordWrapper';
import { PrecisionLineWrapper } from './Structures/PrecisionLineWrapper';
import { PrecisionTextMeasurer } from './Structures/PrecisionTextMeasurer';
import { PrecisionUnderflowCascader } from './Structures/PrecisionUnderflowCascader';

export let PrWoWr = 
{
    PrecisionLineWrapper: PrecisionLineWrapper,
    PrecisionOverflowFinder: PrecisionOverflowFinder,
    PrecisionTextMeasurer: PrecisionTextMeasurer,
    PrecisionUnderflowCascader: PrecisionUnderflowCascader,

    PrecisionWordWrapper: PrecisionWordWrapper,
};

let WordWrapper = CGT.WWCore.WordWrapper;

RegisterWrapper();

function RegisterWrapper()
{
    let lineWrapper = new PrecisionLineWrapper();
    let precisionWrapper = new WordWrapper(lineWrapper);
    precisionWrapper.WrapCode = "precision";

    CGT.WWCore.RegisterWrapper(precisionWrapper);
}

CGT.WWCore.UpdateActiveWrappers(); // For when this plugin's supposed to handle wrapping