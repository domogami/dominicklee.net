import stylesUrl from '~/styles/app.css';
import ThemeSetter from '../../components/ThemeSetter';

export const links = () => {
  return [{ rel: 'stylesheet', href: stylesUrl }];
};

export default function Index() {
  return (
    <div className="drinks">
      <ThemeSetter className="drinks-theme-setter" />
      <h2 className="drink-name">Beach dog</h2>
      <ol>
        <li>1/2 oz - Ammaretto</li>
        <li>1 oz - Malibu Pineapple</li>
        <li>1 oz - Kalua</li>
        <li>Shake with crushed ice</li>
        <li>Top with 2 oz of chilled Nitro Pepsi freshly poured</li>
      </ol>

      <h2 className="drink-name">Death to Bayshore</h2>
      <ol>
        <li>1 1/2 oz - Peach schnapps</li>
        <li>1 1/2 oz - watermellon liquer</li>
        <li>1/2 oz - Bourbon</li>
        <li>1/2 oz - Simple Syrup</li>
      </ol>

      <h2 className="drink-name">Blushing Thicket</h2>
      <ol>
        <li>2oz - Rose</li>
        <li>1oz - Blackberry Syrup</li>
        <li>1/2 oz Peach Schnapps</li>
      </ol>

      <h2 className="drink-name">Irish Grasshopper</h2>
      <ol>
        <li>1/4 oz - Kahlua</li>
        <li>1 oz - Creme de Menthe</li>
        <li>Shake with cubed ice</li>
        <li>Pour over 2oz carolans</li>
      </ol>

      <h2 className="drink-name">St. Cuthbert</h2>
      <ol>
        <li>1 oz - Peach Schnapps</li>
        <li>1/4 oz - Triple Sec</li>
        <li>1 oz - Apple Brandy</li>
        <li>1/4 oz - Dry Gin</li>
        <li>Shake with crushed ice and strain</li>
      </ol>

      <h2 className="drink-name">Almond Cookie</h2>
      <ol>
        <li>1 1/2 oz - Ammaretto</li>
        <li>2 oz - Almond milk</li>
        <li>Shake over ice</li>
        <li>Garnish with a bar spoon of creme de menthe and cinamon</li>
      </ol>

      <h2 className="drink-name">No Name</h2>
      <ol>
        <li>2 oz - Orange Juice</li>
        <li>1 oz - Creme de Menthe</li>
        <li>1/4 oz - Gin</li>
      </ol>
      <h2 className="drink-name">Fruit Salad</h2>
      <ol>
        <li>1/4 oz - Pineapple Juice</li>
        <li>1/4 oz - Fresh Orange Juice</li>
        <li>1/4 oz - Fresh Lime</li>
        <li>1 oz - Brandy</li>
        <li>1 oz - Gold Kum</li>
        <li>1/4 oz - Malibu</li>
        <li>Dash of orange bitters</li>
        <li>Shake with crushed ice</li>
        <li>Serve with muttled mint as garnish</li>
      </ol>
      <h2 className="drink-name">La Ventura</h2>
      <ol>
        <li>1 oz - Malibu</li>
        <li>1 oz - Malibu Pineapple</li>
        <li>1/4 oz - Blue Curasao</li>
        <li>1 oz Triple Sec</li>
        <li>1 1/2 oz - Banana Syrup</li>
      </ol>
    </div>
  );
}
