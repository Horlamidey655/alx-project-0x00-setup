import Button from "@/components/Button";
import Card from "@/components/Card";

const Landing: React.FC = () => {
  return (
    <div>
      <h1 className="text-xl font-extralight">Landing Page</h1>
      <Card />
      <Card />
      <div className="flex flex-col gap-4 mt-6">
        {/* Small Buttons */}
        <div className="flex gap-2">
          <Button
            title="Small - rounded-sm"
            style="bg-blue-500 text-white text-xs px-3 py-1 rounded-sm"
          />
          <Button
            title="Small - rounded-md"
            style="bg-blue-500 text-white text-xs px-3 py-1 rounded-md"
          />
          <Button
            title="Small - rounded-full"
            style="bg-blue-500 text-white text-xs px-3 py-1 rounded-lg"
          />
        </div>
        {/* Medium Buttons */}
        <div className="flex gap-2 ">
          <Button
            title="Medium - rounded-sm"
            style="bg-green-500 text-white text-base px-4 py-2 rounded-sm"
          />
          <Button
            title="Medium - rounded-md"
            style="bg-green-500 text-white text-base px-4 py-2 rounded-md"
          />
          <Button
            title="Medium - rounded-full"
            style="bg-green-500 text-white text-base px-4 py-2 rounded-lg"
          />
        </div>
        {/* Large Buttons */}
        <div className="flex gap-2">
          <Button
            title="Large - rounded-sm"
            style="bg-red-500 text-white text-lg px-6 py-3 rounded-sm"
          />
          <Button
            title="Large - rounded-md"
            style="bg-red-500 text-white text-lg px-6 py-3 rounded-md"
          />
          <Button
            title="Large - rounded-lg"
            style="bg-red-500 text-white text-lg px-6 py-3 rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Landing;
