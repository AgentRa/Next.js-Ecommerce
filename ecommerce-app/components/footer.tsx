import { APP_NAME } from "@/lib/constants";

type Props = {};
export default function Footer({}: Props) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t">
      <div className="p-5 flex-center">
        {currentYear} {APP_NAME}. All rights reserved
      </div>
    </footer>
  );
}
