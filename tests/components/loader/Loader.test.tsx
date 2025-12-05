import { render, screen } from '@testing-library/react';
import Loader from '../../../src/components/loader/Loader';

describe("Loader component", () => {
    test("Loader rendering", () => {
        render(
            <Loader />
        )
        const loader = screen.getByTestId("loader");
        expect(loader).toBeInTheDocument();
    });
});