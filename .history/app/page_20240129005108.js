export default function Home() {
  const [cats, setCats] = useState([]);
  const [selectedCat, setSelectedCat] = useState(null);

  useEffect(() => {
    getAllCategories();
  }, []);

  const getAllCategories = () => {
    MCApis.getAllCats().then((res) => {
      setCats(res.data.data.categories);
    });
  };

  const options = cats.map((item) => ({
    value: item?.id,
    label: item?.name,
  }));

  const childrenOptions = selectedCat
    ? selectedCat.children.map((child) => ({
        value: child?.id,
        label: child?.name,
      }))
    : [];

  const handleChange = (selectedOption) => {
    setSelectedCat(selectedOption);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Select
        options={options}
        onChange={handleChange}
        value={selectedCat}
        isSearchable
        placeholder="Select a category..."
      />
      {selectedCat && (
        <Select
          options={childrenOptions}
          isSearchable
          placeholder="Select a subcategory..."
        />
      )}
      <h2>Selected ID: {selectedCat?.value}</h2>
      <h2>Here is your data</h2>
    </main>
  );
}