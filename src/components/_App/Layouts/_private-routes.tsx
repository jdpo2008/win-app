import { useRouter } from "next/router";
import Button from "@components/ui/button";
import { SpinnerIcon } from "@components/icons/spinner-icon";
import { LongArrowIcon } from "@components/icons/long-arrow-icon";
// import LoginUserForm from '@/components/auth/login-form';
import { PATH_PAGE } from "@routes/paths";
import useAuth from "@hooks/useAuth";

function UnAuthorizedView() {
  const router = useRouter();
  return (
    <div className="relative flex min-h-full flex-col items-center justify-center overflow-hidden py-5 px-4 md:py-8">
      <Button
        variant="icon"
        onClick={() => router.push(PATH_PAGE.home)}
        className="sx:mb-10 left-4 z-10 mb-8 flex items-center justify-center sm:absolute sm:mb-0"
      >
        <LongArrowIcon className="h-4 w-4" /> Back to Home
      </Button>
      {/* <div className="relative mx-auto w-full max-w-[445px] overflow-hidden rounded-lg bg-light pb-2 dark:bg-dark-300 lg:max-w-[478px] lg:pb-1">
        <LoginUserForm />
      </div> */}
    </div>
  );
}

export default function PrivateRoute({
  children,
}: React.PropsWithChildren<{}>) {
  const { isAuthorized } = useAuth();

  if (!isAuthorized) {
    return <UnAuthorizedView />;
  }
  if (isAuthorized) {
    return <>{children}</>;
  }
  return (
    <div className="grid min-h-full w-full place-content-center">
      <div className="flex items-center gap-3 text-lg">
        <SpinnerIcon className="h-auto w-6 animate-spin" /> Loading...
      </div>
    </div>
  );
}
