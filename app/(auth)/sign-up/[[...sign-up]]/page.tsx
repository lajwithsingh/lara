import { SignUp } from "@clerk/nextjs";

/**
 * Renders the Page component.
 *
 * @return {JSX.Element} The rendered SignUp component.
 */
export default function Page() {
  return <SignUp path="/sign-up" />;
}