import FilterBar from './FilterBar';
import ReceiptCard from './ReceiptCard';

export default function ReceiptContainer() {
    return (
        <div>
            <FilterBar />
            <div>
                <ReceiptCard />
            </div>
        </div>
    );
}