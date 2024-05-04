import { SignIn } from "@clerk/nextjs";

/**
 * Renders the Page component.
 *
 * @return {JSX.Element} The rendered SignIn component.
 */
export default function Page() {
  return <SignIn path="/sign-in" />;
}